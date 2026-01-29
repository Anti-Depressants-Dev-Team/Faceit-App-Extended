/**
 * Storage utility functions for Chrome extension storage API
 */

/**
 * Get Chrome or Firefox storage API
 * @returns {chrome.storage|browser.storage}
 */
export function getStorage() {
    const inChrome = typeof chrome !== 'undefined' && chrome.storage;
    return inChrome ? chrome.storage : browser.storage;
}

/**
 * Get items from local storage
 * @param {string[]} keys - Array of keys to retrieve
 * @returns {Promise<Object>} Promise resolving to storage items
 */
export function getStorageItems(keys) {
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
export function setStorageItems(items) {
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
 * Listen to storage changes
 * @param {Function} callback - Callback function for storage changes
 */
export function onStorageChange(callback) {
    const storage = getStorage();
    storage.onChanged.addListener(callback);
}

