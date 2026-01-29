/**
 * Main content script for FACEIT CS2 Predictor
 * Orchestrates match prediction display and statistics
 */

import { 
    ELEMENT_IDS, 
    FACEIT_INFO_ID, 
    STORAGE_KEYS, 
    UI_TEXT, 
    MATCH_CONFIG,
    STATS_CONFIG 
} from './config.js';
import { getStorageItems, onStorageChange } from './utils/storage.js';
import { getMatchPredictionWithRetry } from './utils/api.js';
import { scrollToElement } from './utils/dom.js';
import { clearOldStorage, getCachedPrediction, cachePrediction } from './utils/cache.js';
import {
    createPredictionsContainer,
    removeLoader,
    createPredictionsList,
    createErrorElement,
    createAdvancedStatsHeading,
    createStatsDropdowns,
    createStatsTable
} from './ui/components.js';
import { calculateTeamMapStats } from './ui/stats.js';
import { injectMatchmakingData } from './ui/matchmaking.js';

// State management
let state = {
    extensionEnabled: true,
    mapPredictionsEnabled: true,
    advancedStatsEnabled: true,
    matchmakingDataEnabled: true,
    daysBefore: STATS_CONFIG.DAYS_BEFORE_DEFAULT,
    selectedMap: STATS_CONFIG.MAPS[0],
    isProcessing: false
};

// Initialize storage and clear old cache
clearOldStorage();

// Load initial settings
loadSettings();

// Listen for storage changes
onStorageChange(handleStorageChange);

// Setup mutation observer for matchroom pages
setupMatchroomObserver();

// Setup matchmaking data handler
setupMatchmakingDataHandler();

/**
 * Load extension settings from storage
 */
async function loadSettings() {
    try {
        const items = await getStorageItems([
            STORAGE_KEYS.EXTENSION_ENABLED,
            STORAGE_KEYS.MAP_PREDICTIONS_ENABLED,
            STORAGE_KEYS.ADVANCED_STATS_ENABLED,
            STORAGE_KEYS.MATCHMAKING_DATA_ENABLED
        ]);

        state.extensionEnabled = items[STORAGE_KEYS.EXTENSION_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.EXTENSION_ENABLED] 
            : true;
        state.mapPredictionsEnabled = items[STORAGE_KEYS.MAP_PREDICTIONS_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.MAP_PREDICTIONS_ENABLED] 
            : true;
        state.advancedStatsEnabled = items[STORAGE_KEYS.ADVANCED_STATS_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.ADVANCED_STATS_ENABLED] 
            : true;
        state.matchmakingDataEnabled = items[STORAGE_KEYS.MATCHMAKING_DATA_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.MATCHMAKING_DATA_ENABLED] 
            : true;
    } catch (error) {
        console.warn('Error loading settings:', error);
    }
}

/**
 * Handle storage changes
 */
function handleStorageChange(changes, area) {
    if (area !== 'local') return;

    if (STORAGE_KEYS.EXTENSION_ENABLED in changes) {
        state.extensionEnabled = changes[STORAGE_KEYS.EXTENSION_ENABLED].newValue;
    }
    if (STORAGE_KEYS.MAP_PREDICTIONS_ENABLED in changes) {
        state.mapPredictionsEnabled = changes[STORAGE_KEYS.MAP_PREDICTIONS_ENABLED].newValue;
    }
    if (STORAGE_KEYS.ADVANCED_STATS_ENABLED in changes) {
        state.advancedStatsEnabled = changes[STORAGE_KEYS.ADVANCED_STATS_ENABLED].newValue;
    }
    if (STORAGE_KEYS.MATCHMAKING_DATA_ENABLED in changes) {
        state.matchmakingDataEnabled = changes[STORAGE_KEYS.MATCHMAKING_DATA_ENABLED].newValue;
    }
    if (STORAGE_KEYS.MATCHMAKING_DATA in changes) {
        const newMatchmakingData = changes[STORAGE_KEYS.MATCHMAKING_DATA].newValue;
        if (newMatchmakingData && state.extensionEnabled && state.matchmakingDataEnabled) {
            injectMatchmakingData(newMatchmakingData);
        }
    }
}

/**
 * Setup mutation observer for matchroom pages
 */
function setupMatchroomObserver() {
    const observer = new MutationObserver(async (mutations, obs) => {
        if (!state.extensionEnabled || state.isProcessing) {
            return;
        }

        if (!location.href.includes("/cs2/room/")) {
            return;
        }

        // Check if already injected
        if (document.getElementById(ELEMENT_IDS.PREDICTIONS)) {
            return;
        }

        // Check if FACEIT info element exists
        const infoElements = document.getElementsByName(FACEIT_INFO_ID);
        if (infoElements.length === 0) {
            return;
        }

        state.isProcessing = true;

        try {
            await processMatchroom(infoElements[0]);
        } catch (error) {
            console.error('Error processing matchroom:', error);
        } finally {
            state.isProcessing = false;
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
}

/**
 * Process matchroom page
 * @param {HTMLElement} infoElement - FACEIT info element
 */
async function processMatchroom(infoElement) {
    // Inject CSS
    injectStyles();

    // Create predictions container
    const predictionsDiv = createPredictionsContainer();
    infoElement.appendChild(predictionsDiv);

    // Extract match ID and nickname
    const faceitMatchId = location.href.split("/").pop();
    const nickname = extractNickname();

    // Check if match is finished
    if (!MATCH_CONFIG.PREDICTIONS_FOR_FINISHED_MATCHES_ENABLED && isMatchFinished()) {
        removeLoader();
        const errorDiv = createErrorElement(UI_TEXT.PREDICTIONS_NOT_SUPPORTED);
        infoElement.appendChild(errorDiv);
        return;
    }

    // Get match data
    let response;
    try {
        response = await getMatchData(faceitMatchId, nickname);
    } catch (error) {
        removeLoader();
        const errorDiv = createErrorElement('Failed to load match data. Please try refreshing the page.');
        infoElement.appendChild(errorDiv);
        return;
    }

    removeLoader();

    // Handle errors
    if (response.error) {
        const errorDiv = createErrorElement(response.error);
        infoElement.appendChild(errorDiv);
        return;
    }

    // Display advanced stats
    if (state.advancedStatsEnabled && response.team1_stats && response.team2_stats) {
        // Override STATS_CONFIG.MAPS with maps from predictions response
        if (response.predictions && Object.keys(response.predictions).length > 0) {
            const mapsFromResponse = Object.keys(response.predictions);
            // Clear existing maps and add new ones
            STATS_CONFIG.MAPS.length = 0;
            STATS_CONFIG.MAPS.push(...mapsFromResponse);
            // Update selected map to first map from response if current map is not in the new list
            if (!STATS_CONFIG.MAPS.includes(state.selectedMap)) {
                state.selectedMap = STATS_CONFIG.MAPS[0];
            }
        }

        // Add scroll to stats heading
        const statsHeading = createAdvancedStatsHeading(() => {
            scrollToElement(ELEMENT_IDS.STATS_TABLE);
        });
        predictionsDiv.appendChild(statsHeading);

        // Create dropdowns and table
        const parentContainer = infoElement.parentElement?.parentElement;
        if (parentContainer) {
            const dropdownsDiv = createStatsDropdowns(
                handleDaysChange.bind(null, response),
                handleMapChange.bind(null, response),
                state.daysBefore,
                state.selectedMap
            );
            parentContainer.appendChild(dropdownsDiv);

            const statsTable = createStatsTableForResponse(response);
            parentContainer.appendChild(statsTable);
        }
    }

    // Display predictions
    if (state.mapPredictionsEnabled && response.predictions) {
        const predictionsList = createPredictionsList(response.predictions);
        predictionsDiv.appendChild(predictionsList);
    }
}

/**
 * Get match data (from cache or API)
 * @param {string} faceitMatchId - FACEIT match ID
 * @param {string} nickname - Player nickname
 * @returns {Promise<Object>}
 */
async function getMatchData(faceitMatchId, nickname) {
    // Try cache first
    const cached = getCachedPrediction(faceitMatchId);
    if (cached) {
        return cached;
    }

    // Fetch from API
    const prediction = await getMatchPredictionWithRetry(faceitMatchId, nickname);
    
    // Cache the result
    cachePrediction(faceitMatchId, prediction);

    return prediction;
}

/**
 * Extract player nickname from page
 * @returns {string}
 */
function extractNickname() {
    const nicknameAnchorTags = document.querySelectorAll('a[href*="/players/"]');
    if (nicknameAnchorTags.length === 0) {
        return "";
    }

    const href = nicknameAnchorTags[0].href;
    const startIndex = href.indexOf("/players/") + "/players/".length;
    const endIndex = href.indexOf('/', startIndex);
    
    return href.substring(startIndex, endIndex !== -1 ? endIndex : href.length);
}

/**
 * Check if match is finished
 * @returns {boolean}
 */
function isMatchFinished() {
    const finishedDivs = Array.from(document.querySelectorAll('div'))
        .filter(div => div.textContent.includes('Finished'));
    return finishedDivs.length > 0;
}

/**
 * Handle days dropdown change
 * @param {Object} response - Full response data
 * @param {number} days - Selected days
 */
function handleDaysChange(response, days) {
    state.daysBefore = days;
    updateStatsTable(response);
}

/**
 * Handle map dropdown change
 * @param {Object} response - Full response data
 * @param {string} map - Selected map
 */
function handleMapChange(response, map) {
    state.selectedMap = map;
    updateStatsTable(response);
}

/**
 * Update stats table when filters change
 * @param {Object} response - Full response data
 */
function updateStatsTable(response) {
    const existingTable = document.getElementById(ELEMENT_IDS.STATS_TABLE);
    if (!existingTable || !response.team1_stats || !response.team2_stats) {
        return;
    }

    const team1Stats = calculateTeamMapStats(response.team1_stats, state.daysBefore);
    const team2Stats = calculateTeamMapStats(response.team2_stats, state.daysBefore);
    
    const newTable = createStatsTable(team1Stats, team2Stats, state.selectedMap);
    existingTable.parentElement.replaceChild(newTable, existingTable);
}

/**
 * Create stats table for response
 * @param {Object} response - Full response data
 * @returns {HTMLElement}
 */
function createStatsTableForResponse(response) {
    const team1Stats = calculateTeamMapStats(response.team1_stats, state.daysBefore);
    const team2Stats = calculateTeamMapStats(response.team2_stats, state.daysBefore);
    
    return createStatsTable(team1Stats, team2Stats, state.selectedMap);
}

/**
 * Inject CSS styles into the page
 */
function injectStyles() {
    if (document.getElementById('faceit-cs2-predictor-styles')) {
        return;
    }

    // Inject CSS as inline style tag since content.css is already loaded via manifest
    // This ensures styles are available even if the CSS file loading is delayed
    const style = document.createElement('style');
    style.id = 'faceit-cs2-predictor-styles';
    style.textContent = `
        /* Additional inline styles if needed - main styles come from content.css */
    `;
    document.head.appendChild(style);
}

/**
 * Setup matchmaking data handler
 */
function setupMatchmakingDataHandler() {
    // Initial load
    getStorageItems([STORAGE_KEYS.MATCHMAKING_DATA]).then(items => {
        if (items[STORAGE_KEYS.MATCHMAKING_DATA] && state.extensionEnabled && state.matchmakingDataEnabled) {
            injectMatchmakingData(items[STORAGE_KEYS.MATCHMAKING_DATA]);
        }
    });
}
