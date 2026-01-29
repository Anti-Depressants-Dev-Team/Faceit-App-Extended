/**
 * Cache management for match predictions
 */

import { MATCH_CONFIG, STORAGE_KEYS } from '../config.js';

/**
 * Clear old storage if version changed
 */
export function clearOldStorage() {
    const currentVersion = localStorage.getItem(STORAGE_KEYS.STORAGE_CLEARED);
    
    if (currentVersion !== MATCH_CONFIG.STORAGE_VERSION) {
        localStorage.removeItem(STORAGE_KEYS.MATCHES);
        localStorage.removeItem(STORAGE_KEYS.MATCH_PREDICTION_ORDER);
        localStorage.setItem(STORAGE_KEYS.STORAGE_CLEARED, MATCH_CONFIG.STORAGE_VERSION);
    }
}

/**
 * Get cached match prediction
 * @param {string} faceitMatchId - FACEIT match ID
 * @returns {Object|null} Cached prediction or null
 */
export function getCachedPrediction(faceitMatchId) {
    const cachedData = localStorage.getItem(STORAGE_KEYS.MATCHES);
    if (!cachedData) return null;

    try {
        const matchPredictions = JSON.parse(LZString.decompressFromUTF16(cachedData));
        return matchPredictions[faceitMatchId] || null;
    } catch (error) {
        console.warn('Error reading cached prediction:', error);
        return null;
    }
}

/**
 * Cache match prediction
 * @param {string} faceitMatchId - FACEIT match ID
 * @param {Object} prediction - Prediction data to cache
 */
export function cachePrediction(faceitMatchId, prediction) {
    try {
        const cachedData = localStorage.getItem(STORAGE_KEYS.MATCHES);
        const matchPredictions = cachedData 
            ? JSON.parse(LZString.decompressFromUTF16(cachedData))
            : {};
        
        const matchOrder = JSON.parse(localStorage.getItem(STORAGE_KEYS.MATCH_PREDICTION_ORDER) || '[]');

        // Remove oldest if cache is full
        if (matchOrder.length >= MATCH_CONFIG.MAX_CACHED_ITEMS) {
            const lastKey = matchOrder.pop();
            delete matchPredictions[lastKey];
        }

        // Add new prediction
        matchPredictions[faceitMatchId] = prediction;
        matchOrder.unshift(faceitMatchId);

        // Save to storage
        if (prediction.error == null) {
            localStorage.setItem(STORAGE_KEYS.MATCH_PREDICTION_ORDER, JSON.stringify(matchOrder));
            localStorage.setItem(STORAGE_KEYS.MATCHES, LZString.compressToUTF16(JSON.stringify(matchPredictions)));
        }
    } catch (error) {
        console.warn('Error caching prediction:', error);
    }
}

