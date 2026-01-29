/**
 * Background service worker for FACEIT CS2 Predictor
 * Handles matchmaking data interception and storage
 */

import { STORAGE_KEYS } from './config.js';
import { setStorageItems } from './utils/storage.js';

let isProcessingRequest = false;

/**
 * Get browser API (Chrome or Firefox)
 */
const browserAPI = typeof chrome !== 'undefined' && chrome.webRequest ? chrome : browser;

/**
 * Intercept matchmaking API requests to extract server and map data
 */
browserAPI.webRequest.onBeforeRequest.addListener(
    async (details) => {
        if (isProcessingRequest) return;

        const url = details.url;
        
        try {
            isProcessingRequest = true;
            
            const response = await fetch(url, {
                method: "GET",
                cache: 'no-cache'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const contentType = response.headers.get("content-type");
            const responseData = contentType && contentType.includes("application/json")
                ? await response.json()
                : await response.text();

            // Extract matchmaking data
            const matchmakingData = extractMatchmakingData(responseData);

            if (matchmakingData) {
                await setStorageItems({ [STORAGE_KEYS.MATCHMAKING_DATA]: matchmakingData });
                console.log('Matchmaking data saved:', matchmakingData);
            }
            
        } catch (error) {
            console.error("Error processing matchmaking request:", error);
        } finally {
            isProcessingRequest = false;
        }
    },
    { urls: ["https://www.faceit.com/api/match/v2/match/*"] }
);

/**
 * Extract matchmaking data from API response
 * @param {Object|string} responseData - API response data
 * @returns {Object|null} Matchmaking data object or null
 */
function extractMatchmakingData(responseData) {
    try {
        // Handle string response
        if (typeof responseData === 'string') {
            responseData = JSON.parse(responseData);
        }

        if (!responseData || !responseData.payload) {
            return null;
        }

        // Extract server locations
        const serverLocations = responseData.payload.locations || [];
        const serverCountries = serverLocations.map(location => location.class_name || '').filter(Boolean);

        // Extract available maps from tags
        const tags = responseData.payload.tags || [];
        const availableMaps = [];

        for (const tag of tags) {
            if (tag.includes("de_")) {
                const maps = tag.split(',');
                
                for (const map of maps) {
                    if (map.startsWith("de_")) {
                        const mapName = map.substring(3);
                        const capitalizedMap = mapName.charAt(0).toUpperCase() + mapName.slice(1);
                        availableMaps.push(capitalizedMap);
                    }
                }
                break;
            }
        }

        availableMaps.sort((a, b) => a.localeCompare(b));

        return {
            serverCountries,
            availableMaps,
            updatedOn: Date.now()
        };
    } catch (error) {
        console.error("Error extracting matchmaking data:", error);
        return null;
    }
}
