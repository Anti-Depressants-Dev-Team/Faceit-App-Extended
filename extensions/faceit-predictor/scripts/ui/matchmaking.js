/**
 * Matchmaking data UI components
 */

import { ELEMENT_IDS, STORAGE_KEYS } from '../config.js';
import { findAcceptButtonWithRetries } from '../utils/dom.js';
import { getStorageItems } from '../utils/storage.js';

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
 * Inject matchmaking data into the page
 * @param {Object} matchmakingData - Matchmaking data object
 */
export async function injectMatchmakingData(matchmakingData) {
    // Don't inject if already present
    if (document.getElementById(ELEMENT_IDS.MATCHMAKING_DATA)) {
        return;
    }

    // Don't inject on matchroom pages
    if (location.href.includes("/cs2/room/")) {
        return;
    }

    try {
        const acceptButton = await findAcceptButtonWithRetries(10, 1000);
        const parentElement = acceptButton.parentElement?.parentElement;
        
        if (!parentElement) {
            console.warn("Parent element for accept button not found");
            return;
        }

        const container = createMatchmakingDataContainer(matchmakingData);
        parentElement.appendChild(container);
    } catch (error) {
        console.warn("Could not inject matchmaking data:", error);
    }
}

/**
 * Create matchmaking data container element
 * @param {Object} matchmakingData - Matchmaking data
 * @returns {HTMLElement}
 */
function createMatchmakingDataContainer(matchmakingData) {
    const container = document.createElement("div");
    container.id = ELEMENT_IDS.MATCHMAKING_DATA;
    container.className = "matchmaking-data-container";

    // Servers section
    const serversDiv = document.createElement("div");
    serversDiv.className = "matchmaking-section servers-section";
    const serversTitle = document.createElement("strong");
    serversTitle.textContent = "Servers:";
    serversDiv.appendChild(serversTitle);
    
    const serversList = document.createElement("div");
    serversList.className = "servers-list";
    matchmakingData.serverCountries.forEach(country => {
        const serverItem = document.createElement("span");
        serverItem.className = "server-item";
        serverItem.textContent = country;
        serverItem.setAttribute('title', `Server location: ${country}`);
        serversList.appendChild(serverItem);
    });
    serversDiv.appendChild(serversList);

    // Maps section
    const mapsDiv = document.createElement("div");
    mapsDiv.className = "matchmaking-section maps-section";
    const mapsTitle = document.createElement("strong");
    mapsTitle.textContent = "Maps:";
    mapsDiv.appendChild(mapsTitle);
    
    const mapsList = document.createElement("div");
    mapsList.className = "maps-list";
    matchmakingData.availableMaps.forEach(map => {
        const mapItem = document.createElement("span");
        mapItem.className = "map-item";
        mapItem.textContent = map;
        mapItem.setAttribute('title', `Available map: ${map}`);
        mapsList.appendChild(mapItem);
    });
    mapsDiv.appendChild(mapsList);

    container.appendChild(serversDiv);
    container.appendChild(mapsDiv);

    return container;
}

