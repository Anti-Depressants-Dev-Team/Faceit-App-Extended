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
        MATCHMAKING_DATA_ENABLED: "faceit_cs2_predictor_matchmaking_data_enabled",
        MATCHMAKING_DATA: "faceit_cs2_predictor_matchmaking_data",
        MATCHES: "faceit_cs2_predictor_matches",
        MATCH_PREDICTION_ORDER: "faceit_cs2_predictor_match_prediction_order",
        STORAGE_CLEARED: "faceit_cs2_predictor_storage_cleared"
    };

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
     * Background service worker for FACEIT CS2 Predictor
     * Handles matchmaking data interception and storage
     */


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

})();
