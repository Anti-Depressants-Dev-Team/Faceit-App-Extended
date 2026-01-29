/**
 * UI component creation functions
 */

import { ELEMENT_IDS, ELEMENT_CLASSES, UI_TEXT, STATS_CONFIG } from '../config.js';
import { createElementWithText, formatMapName, formatTableCellData } from '../utils/dom.js';

/**
 * Create predictions container with loading state
 * @returns {HTMLElement}
 */
export function createPredictionsContainer() {
    const container = document.createElement("div");
    container.id = ELEMENT_IDS.PREDICTIONS;

    const loaderContainer = document.createElement("div");
    loaderContainer.className = ELEMENT_CLASSES.LOADER_CONTAINER;

    const spinner = document.createElement("div");
    spinner.className = ELEMENT_CLASSES.SPINNER;

    const loadingMessage = document.createElement("div");
    loadingMessage.className = ELEMENT_CLASSES.LOADING_MESSAGE;
    loadingMessage.textContent = UI_TEXT.LOADING;

    loaderContainer.appendChild(spinner);
    loaderContainer.appendChild(loadingMessage);
    container.appendChild(loaderContainer);

    return container;
}

/**
 * Remove loading indicator
 */
export function removeLoader() {
    const loaderContainer = document.querySelector(`.${ELEMENT_CLASSES.LOADER_CONTAINER}`);
    if (loaderContainer && loaderContainer.parentElement) {
        loaderContainer.parentElement.removeChild(loaderContainer);
    }
}

/**
 * Create predictions list from prediction data
 * @param {Object} predictions - Predictions object with map names as keys
 * @returns {HTMLElement}
 */
export function createPredictionsList(predictions) {
    const predictionsList = document.createElement("ul");
    predictionsList.className = "predictions-list";

    for (const [map, prediction] of Object.entries(predictions)) {
        const [team1LosePercentage, team1WinPercentage] = prediction;
        const team1LosePercent = parseFloat((team1LosePercentage * 100).toFixed(2));
        const team1WinPercent = parseFloat((team1WinPercentage * 100).toFixed(2));

        // Determine which team has higher win percentage
        const team1IsHigher = team1WinPercent >= team1LosePercent;

        const listItem = document.createElement("li");
        listItem.className = "prediction-item";

        // Map name badge
        const mapName = document.createElement("div");
        mapName.className = "map-name";
        mapName.textContent = formatMapName(map);

        // Progress container
        const progressContainer = document.createElement("div");
        progressContainer.className = "progress-container";

        // Left percentage (Team 1)
        const leftPercentageText = document.createElement("div");
        leftPercentageText.className = team1IsHigher 
            ? "percentage percentage-win" 
            : "percentage percentage-lose";
        leftPercentageText.textContent = `${team1WinPercent.toFixed(1)}%`;
        leftPercentageText.setAttribute('title', `Team 1: ${team1WinPercent.toFixed(2)}%`);

        // Right percentage (Team 2)
        const rightPercentageText = document.createElement("div");
        rightPercentageText.className = team1IsHigher 
            ? "percentage percentage-lose" 
            : "percentage percentage-win";
        rightPercentageText.textContent = `${team1LosePercent.toFixed(1)}%`;
        rightPercentageText.setAttribute('title', `Team 2: ${team1LosePercent.toFixed(2)}%`);

        // Progress bar
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-label', `Win probability: Team 1 ${team1WinPercent.toFixed(1)}%, Team 2 ${team1LosePercent.toFixed(1)}%`);

        // Left bar (Team 1)
        const leftBar = document.createElement("div");
        leftBar.className = team1IsHigher 
            ? "win-percentage" 
            : "lose-percentage";
        leftBar.style.width = `${team1WinPercent}%`;
        leftBar.setAttribute('aria-valuenow', team1WinPercent);
        leftBar.setAttribute('aria-valuemin', '0');
        leftBar.setAttribute('aria-valuemax', '100');

        // Right bar (Team 2)
        const rightBar = document.createElement("div");
        rightBar.className = team1IsHigher 
            ? "lose-percentage" 
            : "win-percentage";
        rightBar.style.width = `${team1LosePercent}%`;
        rightBar.setAttribute('aria-valuenow', team1LosePercent);
        rightBar.setAttribute('aria-valuemin', '0');
        rightBar.setAttribute('aria-valuemax', '100');

        progressBar.appendChild(leftBar);
        progressBar.appendChild(rightBar);

        progressContainer.appendChild(leftPercentageText);
        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(rightPercentageText);

        listItem.appendChild(mapName);
        listItem.appendChild(progressContainer);
        predictionsList.appendChild(listItem);
    }

    return predictionsList;
}

/**
 * Create error message element
 * @param {string} error - Error message
 * @returns {HTMLElement}
 */
export function createErrorElement(error) {
    const errorDiv = document.createElement("div");
    errorDiv.id = ELEMENT_IDS.ERROR_MESSAGE;
    errorDiv.className = "error-message";
    errorDiv.textContent = error;
    return errorDiv;
}

/**
 * Create advanced stats heading with click handler
 * @param {Function} onClick - Click handler function
 * @returns {HTMLElement}
 */
export function createAdvancedStatsHeading(onClick) {
    const heading = createElementWithText('h2', UI_TEXT.SHOW_ADVANCED_STATS, ELEMENT_CLASSES.SHOW_ADVANCED_STATS);
    heading.style.cursor = 'pointer';
    heading.setAttribute('role', 'button');
    heading.setAttribute('tabindex', '0');
    heading.setAttribute('aria-label', 'Scroll to advanced statistics');
    
    const handleClick = () => onClick();
    heading.addEventListener('click', handleClick);
    heading.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    });

    return heading;
}

/**
 * Create dropdowns for stats filtering
 * @param {Object} response - Full response data
 * @param {Function} onDaysChange - Days dropdown change handler
 * @param {Function} onMapChange - Map dropdown change handler
 * @param {number} currentDays - Current days value
 * @param {string} currentMap - Current map value
 * @returns {HTMLElement}
 */
export function createStatsDropdowns(onDaysChange, onMapChange, currentDays = STATS_CONFIG.DAYS_BEFORE_DEFAULT, currentMap = STATS_CONFIG.MAPS[0]) {
    const dropdownDiv = document.createElement("div");
    dropdownDiv.className = "stats-dropdowns";

    // Days dropdown
    const labelDays = document.createElement("label");
    labelDays.textContent = UI_TEXT.DAYS_BEFORE;
    labelDays.className = "dropdown-label";

    const dropdownDays = document.createElement("select");
    dropdownDays.className = ELEMENT_CLASSES.DROPDOWN_STYLE;
    dropdownDays.setAttribute('aria-label', 'Select days before');

    STATS_CONFIG.DAYS_BEFORE_AVAILABLE.forEach(days => {
        const option = document.createElement("option");
        option.value = days;
        option.textContent = days;
        dropdownDays.appendChild(option);
    });

    dropdownDays.value = currentDays;
    dropdownDays.addEventListener("change", (e) => {
        onDaysChange(Number(e.target.value));
    });

    // Map dropdown
    const labelMap = document.createElement("label");
    labelMap.textContent = UI_TEXT.MAP;
    labelMap.className = "dropdown-label";

    const mapDropdown = document.createElement("select");
    mapDropdown.className = ELEMENT_CLASSES.DROPDOWN_STYLE;
    mapDropdown.setAttribute('aria-label', 'Select map');

    STATS_CONFIG.MAPS.forEach(map => {
        const option = document.createElement("option");
        option.value = map;
        option.textContent = formatMapName(map);
        mapDropdown.appendChild(option);
    });

    mapDropdown.value = currentMap;
    mapDropdown.addEventListener("change", (e) => {
        onMapChange(e.target.value);
    });

    // Assemble
    const daysContainer = document.createElement("div");
    daysContainer.className = "dropdown-group";
    daysContainer.appendChild(labelDays);
    daysContainer.appendChild(dropdownDays);

    const mapContainer = document.createElement("div");
    mapContainer.className = "dropdown-group";
    mapContainer.appendChild(labelMap);
    mapContainer.appendChild(mapDropdown);

    dropdownDiv.appendChild(mapContainer);
    dropdownDiv.appendChild(daysContainer);

    return dropdownDiv;
}

/**
 * Create stats table
 * @param {Object} team1Stats - Team 1 statistics
 * @param {Object} team2Stats - Team 2 statistics
 * @param {string} selectedMap - Currently selected map
 * @returns {HTMLElement}
 */
export function createStatsTable(team1Stats, team2Stats, selectedMap) {
    const tableContainer = document.createElement("div");
    tableContainer.id = ELEMENT_IDS.STATS_TABLE;
    tableContainer.className = ELEMENT_CLASSES.STATS_TABLE_CONTAINER;

    const table = document.createElement('table');
    table.className = "stats-table";

    // Table headers
    const headers = [
        'Player', 'Win %', 'Avg Kills', 'Avg Headshot %', 'Avg Headshots',
        'Avg K/D', 'Avg K/R', 'Avg Deaths', 'Avg Assists',
        'Avg 3k', 'Avg 4k', 'Avg 5k', 'Avg MVPs'
    ];

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.setAttribute('scope', 'col');
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement('tbody');

    // Team 1 rows
    Object.keys(team1Stats).forEach(player => {
        const playerMapStats = team1Stats[player][selectedMap];
        if (!playerMapStats || hasNaNProperties(playerMapStats)) {
            return;
        }

        if (playerMapStats.totalMatchesPlayed === 0) {
            return;
        }

        const row = createStatsTableRow(player, playerMapStats, 'team1');
        tbody.appendChild(row);
    });

    // Team 2 rows
    Object.keys(team2Stats).forEach(player => {
        const playerMapStats = team2Stats[player][selectedMap];
        if (!playerMapStats || hasNaNProperties(playerMapStats)) {
            return;
        }

        if (playerMapStats.totalMatchesPlayed === 0) {
            return;
        }

        const row = createStatsTableRow(player, playerMapStats, 'team2');
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    return tableContainer;
}

/**
 * Create a single stats table row
 * @param {string} player - Player nickname
 * @param {Object} stats - Player statistics
 * @param {string} teamClass - Team class name (team1 or team2)
 * @returns {HTMLElement}
 */
function createStatsTableRow(player, stats, teamClass) {
    const row = document.createElement('tr');
    row.className = `stats-row ${teamClass}`;

    const winPercentageText = `${Math.round(stats.winPercentage)}% (${formatTableCellData(stats.totalMatchesWon)}/${formatTableCellData(stats.totalMatchesPlayed)})`;
    const avgHeadshotPercentageText = `${Math.round(stats.avgHeadshotPercentage)}%`;

    const cellData = [
        { text: player, title: `Player: ${player}` },
        { text: winPercentageText, title: `Win rate: ${winPercentageText}` },
        { text: Math.round(stats.avgKills), title: `Average kills: ${Math.round(stats.avgKills)}` },
        { text: avgHeadshotPercentageText, title: `Headshot percentage: ${avgHeadshotPercentageText}` },
        { text: Math.round(stats.avgHeadshots), title: `Average headshots: ${Math.round(stats.avgHeadshots)}` },
        { text: formatTableCellData(stats.avgKdRatio), title: `K/D ratio: ${formatTableCellData(stats.avgKdRatio)}` },
        { text: formatTableCellData(stats.avgKrRatio), title: `K/R ratio: ${formatTableCellData(stats.avgKrRatio)}` },
        { text: Math.round(stats.avgDeaths), title: `Average deaths: ${Math.round(stats.avgDeaths)}` },
        { text: Math.round(stats.avgAssists), title: `Average assists: ${Math.round(stats.avgAssists)}` },
        { text: formatTableCellData(stats.avgTripleKills), title: `Average triple kills: ${formatTableCellData(stats.avgTripleKills)}` },
        { text: formatTableCellData(stats.avgQuadroKills), title: `Average quad kills: ${formatTableCellData(stats.avgQuadroKills)}` },
        { text: formatTableCellData(stats.avgPentaKills), title: `Average ace kills: ${formatTableCellData(stats.avgPentaKills)}` },
        { text: Math.round(stats.avgMvps), title: `Average MVPs: ${Math.round(stats.avgMvps)}` }
    ];

    cellData.forEach(({ text, title }) => {
        const cell = document.createElement('td');
        cell.textContent = text;
        if (title) {
            cell.setAttribute('title', title);
        }
        row.appendChild(cell);
    });

    return row;
}

import { hasNaNProperties } from '../utils/dom.js';

