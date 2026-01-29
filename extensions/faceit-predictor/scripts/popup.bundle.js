(function () {
    'use strict';

    /**
     * Configuration constants for the FACEIT CS2 Predictor extension
     */


    // Storage keys
    const STORAGE_KEYS = {
        EXTENSION_ENABLED: "faceit_cs2_predictor_extension_enabled",
        MAP_PREDICTIONS_ENABLED: "faceit_cs2_predictor_map_predictions_enabled",
        ADVANCED_STATS_ENABLED: "faceit_cs2_predictor_advanced_stats_enabled",
        MATCHMAKING_DATA_ENABLED: "faceit_cs2_predictor_matchmaking_data_enabled"};

    /**
     * Storage utility functions for Chrome extension storage API
     */

    /**
     * Get Chrome or Firefox storage API
     * @returns {chrome.storage|browser.storage}
     */
    function getStorage() {
        const inChrome = typeof chrome !== 'undefined' && chrome.storage;
        return inChrome ? chrome.storage : browser.storage;
    }

    /**
     * Get items from local storage
     * @param {string[]} keys - Array of keys to retrieve
     * @returns {Promise<Object>} Promise resolving to storage items
     */
    function getStorageItems(keys) {
        const storage = getStorage();
        const inChrome = typeof chrome !== 'undefined' && chrome.storage;
        
        return new Promise((resolve) => {
            if (inChrome) {
                storage.local.get(keys, resolve);
            } else {
                storage.local.get(keys).then(resolve);
            }
        });
    }

    /**
     * Set items in local storage
     * @param {Object} items - Object with key-value pairs to store
     * @returns {Promise<void>}
     */
    function setStorageItems(items) {
        const storage = getStorage();
        const inChrome = typeof chrome !== 'undefined' && chrome.storage;
        
        if (inChrome) {
            return new Promise((resolve) => {
                storage.local.set(items, resolve);
            });
        } else {
            return storage.local.set(items);
        }
    }

    /**
     * Popup script for FACEIT CS2 Predictor extension
     * Handles settings UI and storage synchronization
     */


    // DOM elements
    const toggles = {
        enable: document.getElementById('toggle-enable'),
        mapPredictions: document.getElementById('toggle-map-predictions'),
        advancedStats: document.getElementById('toggle-advanced-stats'),
        matchmakingData: document.getElementById('toggle-matchmaking-data')
    };

    /**
     * Initialize popup
     */
    async function init() {
        try {
            await loadSettings();
            setupEventListeners();
        } catch (error) {
            console.error('Error initializing popup:', error);
            showError('Failed to load settings. Please try again.');
        }
    }

    /**
     * Load settings from storage
     */
    async function loadSettings() {
        const items = await getStorageItems([
            STORAGE_KEYS.EXTENSION_ENABLED,
            STORAGE_KEYS.MAP_PREDICTIONS_ENABLED,
            STORAGE_KEYS.ADVANCED_STATS_ENABLED,
            STORAGE_KEYS.MATCHMAKING_DATA_ENABLED
        ]);

        // Set toggle states (default to true if not set)
        toggles.enable.checked = items[STORAGE_KEYS.EXTENSION_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.EXTENSION_ENABLED] 
            : true;
        
        toggles.mapPredictions.checked = items[STORAGE_KEYS.MAP_PREDICTIONS_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.MAP_PREDICTIONS_ENABLED] 
            : true;
        
        toggles.advancedStats.checked = items[STORAGE_KEYS.ADVANCED_STATS_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.ADVANCED_STATS_ENABLED] 
            : true;
        
        toggles.matchmakingData.checked = items[STORAGE_KEYS.MATCHMAKING_DATA_ENABLED] !== undefined 
            ? items[STORAGE_KEYS.MATCHMAKING_DATA_ENABLED] 
            : true;
    }

    /**
     * Setup event listeners for toggles
     */
    function setupEventListeners() {
        toggles.enable.addEventListener('change', async () => {
            await saveSetting(STORAGE_KEYS.EXTENSION_ENABLED, toggles.enable.checked);
        });

        toggles.mapPredictions.addEventListener('change', async () => {
            await saveSetting(STORAGE_KEYS.MAP_PREDICTIONS_ENABLED, toggles.mapPredictions.checked);
        });

        toggles.advancedStats.addEventListener('change', async () => {
            await saveSetting(STORAGE_KEYS.ADVANCED_STATS_ENABLED, toggles.advancedStats.checked);
        });

        toggles.matchmakingData.addEventListener('change', async () => {
            await saveSetting(STORAGE_KEYS.MATCHMAKING_DATA_ENABLED, toggles.matchmakingData.checked);
        });
    }

    /**
     * Save setting to storage
     * @param {string} key - Storage key
     * @param {*} value - Value to save
     */
    async function saveSetting(key, value) {
        try {
            await setStorageItems({ [key]: value });
        } catch (error) {
            console.error(`Error saving setting ${key}:`, error);
            showError('Failed to save setting. Please try again.');
        }
    }

    /**
     * Show error message (simple implementation)
     * @param {string} message - Error message
     */
    function showError(message) {
        // Could be enhanced with a toast notification
        console.error(message);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
