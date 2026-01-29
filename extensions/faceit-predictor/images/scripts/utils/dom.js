/**
 * DOM utility functions
 */

import { ACCEPT_LOCALIZED } from '../config.js';

/**
 * Create an element with text content and optional class
 * @param {string} tag - HTML tag name
 * @param {string} text - Text content
 * @param {string} className - Optional CSS class name
 * @returns {HTMLElement}
 */
export function createElementWithText(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) {
        element.classList.add(className);
    }
    return element;
}

/**
 * Format number for display in table cells
 * @param {*} data - Data to format
 * @returns {string} Formatted string
 */
export function formatTableCellData(data) {
    const number = Number(data);
    if (isNaN(number)) {
        return String(data);
    }

    return number % 1 === 0 ? number.toString() : number.toFixed(2);
}

/**
 * Check if object has any NaN properties
 * @param {Object} obj - Object to check
 * @returns {boolean}
 */
export function hasNaNProperties(obj) {
    return Object.values(obj).some(value => isNaN(value));
}

/**
 * Find button matching localized text
 * @param {string[]} texts - Array of localized button texts
 * @returns {HTMLElement|null}
 */
function findButtonMatchingTexts(texts) {
    const buttons = document.querySelectorAll('button');
    const lowerCaseTexts = texts.map(t => t.toLowerCase());

    for (const button of buttons) {
        const btnText = button.textContent.trim().toLowerCase();
        if (lowerCaseTexts.includes(btnText)) {
            return button;
        }
    }

    return null;
}

/**
 * Find accept button with retries
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {number} delay - Delay between retries (ms)
 * @returns {Promise<HTMLElement>}
 */
export function findAcceptButtonWithRetries(maxRetries = 10, delay = 1000) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        const tryFindButton = () => {
            const acceptButton = findButtonMatchingTexts(ACCEPT_LOCALIZED);

            if (acceptButton) {
                resolve(acceptButton);
            } else if (attempts < maxRetries) {
                attempts++;
                setTimeout(tryFindButton, delay);
            } else {
                reject(new Error("Accept button not found after maximum retries"));
            }
        };

        tryFindButton();
    });
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
export function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Remove map prefix from map name
 * @param {string} mapName - Map name with prefix
 * @returns {string} Map name without prefix, capitalized
 */
export function formatMapName(mapName) {
    return mapName
        .replace("de_", "")
        .charAt(0)
        .toUpperCase() + mapName.replace("de_", "").slice(1);
}

