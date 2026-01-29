/**
 * API utility functions for backend communication
 */

import { API_CONFIG } from '../config.js';

/**
 * Sleep utility for delays
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch match prediction from backend
 * @param {string} faceitMatchId - FACEIT match ID
 * @param {string} nickname - Player nickname
 * @returns {Promise<Object>} Match prediction data
 */
async function fetchMatchPrediction(faceitMatchId, nickname) {
    const url = `${API_CONFIG.BASE_URL}/match/${faceitMatchId}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_CONFIG.SECRET_KEY}`,
                'Faceit-Player-Nickname': nickname
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.warn('Error fetching match prediction:', error);
        throw error;
    }
}

/**
 * Fetch match prediction with retry logic
 * @param {string} faceitMatchId - FACEIT match ID
 * @param {string} nickname - Player nickname
 * @param {number} retries - Number of retry attempts
 * @param {number} delay - Initial delay between retries (ms)
 * @returns {Promise<Object>} Match prediction data
 */
export async function getMatchPredictionWithRetry(faceitMatchId, nickname, retries = API_CONFIG.RETRY_ATTEMPTS, delay = API_CONFIG.RETRY_DELAY) {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            return await fetchMatchPrediction(faceitMatchId, nickname);
        } catch (error) {
            if (attempt < retries - 1) {
                const nextDelay = delay * Math.pow(1.25, attempt);
                console.debug(`Retrying in ${nextDelay}ms... (${retries - attempt - 1} retries left)`);
                await sleep(nextDelay);
            } else {
                console.warn('All retry attempts failed for match prediction');
                throw error;
            }
        }
    }
}

