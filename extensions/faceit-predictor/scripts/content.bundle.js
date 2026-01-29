(function () {
    'use strict';

    /**
     * Configuration constants for the FACEIT CS2 Predictor extension
     */

    // Extension element IDs
    const ELEMENT_IDS = {
        PREDICTIONS: "faceit-cs2-predictor-info",
        STATS_TABLE: "faceit-cs2-predictor-stats",
        ERROR_MESSAGE: "faceit-cs2-predictor-error",
        MATCHMAKING_DATA: "faceit-cs2-matchmaking-data"
    };

    // Extension element classes
    const ELEMENT_CLASSES = {
        STATS_TABLE_CONTAINER: "stats-table-container",
        LOADER_CONTAINER: "loader-container",
        SPINNER: "spinner",
        LOADING_MESSAGE: "loading-message",
        SHOW_ADVANCED_STATS: "show-advanced-stats",
        DROPDOWN_STYLE: "dropdown-style"
    };

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

    // FACEIT elements
    const FACEIT_INFO_ID = "info";

    // API configuration
    const API_CONFIG = {
        BASE_URL: "https://faceit-cs2-predictor.brkovic.dev",
        SECRET_KEY: "%1q2*dxkjw*=9ldv9^#@0)(k21^1ax)99hmtj5h&_2*ud0f%k)",
        RETRY_ATTEMPTS: 10,
        RETRY_DELAY: 1000
    };

    // Match configuration
    const MATCH_CONFIG = {
        PREDICTIONS_FOR_FINISHED_MATCHES_ENABLED: false,
        MAX_CACHED_ITEMS: 10,
        STORAGE_VERSION: "1.0.0.24"
    };

    // Stats configuration
    const STATS_CONFIG = {
        DAYS_BEFORE_DEFAULT: 3,
        DAYS_BEFORE_AVAILABLE: [3, 7, 10, 14, 30],
        MAPS: ["de_ancient", "de_anubis", "de_dust2", "de_inferno", "de_mirage", "de_nuke", "de_overpass", "de_train"]
    };

    // Localized button texts
    const ACCEPT_LOCALIZED = [
        "ACCEPT", "수락", "AKCEPTUJ", "ПРИНЯТЬ", "ACEPTAR", "ACEITAR",
        "PŘIJMOUT", "AKZEPTIEREN", "ACCEPTER", "HYVÄKSY", "ACCEPTERA",
        "接受", "KABUL ET", "TERIMA", "ยอมรับ", "同意する", "قبول",
        "ELFOGADÁS", "PRIHVATI", "ПРИФАТИ", "ПРИЙНЯТИ"
    ];

    // UI text
    const UI_TEXT = {
        LOADING: "Getting data...",
        PREDICTIONS_NOT_SUPPORTED: "Calculating match predictions for finished matches is not supported yet",
        SHOW_ADVANCED_STATS: "SHOW ADVANCED STATS",
        DAYS_BEFORE: "Days before",
        MAP: "Map"
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
     * Listen to storage changes
     * @param {Function} callback - Callback function for storage changes
     */
    function onStorageChange(callback) {
        const storage = getStorage();
        storage.onChanged.addListener(callback);
    }

    /**
     * API utility functions for backend communication
     */


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
    async function getMatchPredictionWithRetry(faceitMatchId, nickname, retries = API_CONFIG.RETRY_ATTEMPTS, delay = API_CONFIG.RETRY_DELAY) {
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

    /**
     * DOM utility functions
     */


    /**
     * Create an element with text content and optional class
     * @param {string} tag - HTML tag name
     * @param {string} text - Text content
     * @param {string} className - Optional CSS class name
     * @returns {HTMLElement}
     */
    function createElementWithText(tag, text, className) {
        const element = document.createElement(tag);
        element.textContent = text;
        {
            element.classList.add(className);
        }
        return element;
    }

    /**
     * Format number for display in table cells
     * @param {*} data - Data to format
     * @returns {string} Formatted string
     */
    function formatTableCellData(data) {
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
    function hasNaNProperties(obj) {
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
    function findAcceptButtonWithRetries(maxRetries = 10, delay = 1000) {
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
    function scrollToElement(elementId) {
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
    function formatMapName(mapName) {
        return mapName
            .replace("de_", "")
            .charAt(0)
            .toUpperCase() + mapName.replace("de_", "").slice(1);
    }

    /**
     * Cache management for match predictions
     */


    /**
     * Clear old storage if version changed
     */
    function clearOldStorage() {
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
    function getCachedPrediction(faceitMatchId) {
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
    function cachePrediction(faceitMatchId, prediction) {
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

    /**
     * UI component creation functions
     */


    /**
     * Create predictions container with loading state
     * @returns {HTMLElement}
     */
    function createPredictionsContainer() {
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
    function removeLoader() {
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
    function createPredictionsList(predictions) {
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
    function createErrorElement(error) {
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
    function createAdvancedStatsHeading(onClick) {
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
    function createStatsDropdowns(onDaysChange, onMapChange, currentDays = STATS_CONFIG.DAYS_BEFORE_DEFAULT, currentMap = STATS_CONFIG.MAPS[0]) {
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
    function createStatsTable(team1Stats, team2Stats, selectedMap) {
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

    /**
     * Statistics calculation functions
     */


    /**
     * Calculate team map statistics
     * @param {Object} teamStats - Team statistics object
     * @param {number} daysBefore - Number of days to look back
     * @returns {Object} Calculated team statistics
     */
    function calculateTeamMapStats(teamStats, daysBefore = STATS_CONFIG.DAYS_BEFORE_DEFAULT) {
        const to = new Date();
        const from = new Date();
        from.setDate(to.getDate() - daysBefore);
        
        const finalTeamStats = {};

        for (const [playerNickname, playerStatsForMap] of Object.entries(teamStats)) {
            const playerStats = {};

            for (const [mapName, pStats] of Object.entries(playerStatsForMap)) {
                const mapStats = calculateMapStats(pStats, from);
                playerStats[mapName] = mapStats;
            }

            finalTeamStats[playerNickname] = playerStats;
        }

        return finalTeamStats;
    }

    /**
     * Calculate statistics for a specific map
     * @param {Array} matchStats - Array of match statistics
     * @param {Date} fromDate - Start date for filtering
     * @returns {Object} Calculated map statistics
     */
    function calculateMapStats(matchStats, fromDate) {
        let sumKills = 0;
        let sumDeaths = 0;
        let sumAssists = 0;
        let sumTripleKills = 0;
        let sumQuadroKills = 0;
        let sumPentaKills = 0;
        let sumHeadshots = 0;
        let sumHeadshotPercentage = 0;
        let sumKdRatio = 0;
        let sumKrRatio = 0;
        let sumMvps = 0;
        let sumMatchesWon = 0;

        let totalMatches = matchStats.length;

        for (const matchStat of matchStats) {
            const matchFinishDateTime = new Date(matchStat.created_at);
            if (fromDate > matchFinishDateTime) {
                totalMatches--;
                continue;
            }

            sumKills += matchStat.kills;
            sumDeaths += matchStat.deaths;
            sumAssists += matchStat.assists;
            sumTripleKills += matchStat.triple_kills;
            sumQuadroKills += matchStat.quadro_kills;
            sumPentaKills += matchStat.penta_kills;
            sumHeadshots += matchStat.headshots;
            sumHeadshotPercentage += matchStat.headshot_percentage;
            sumKdRatio += matchStat.kd_ratio;
            sumKrRatio += matchStat.kr_ratio;
            sumMvps += matchStat.mvps;
            sumMatchesWon += matchStat.result;
        }

        if (totalMatches === 0) {
            return createEmptyMapStats();
        }

        return {
            avgKills: sumKills / totalMatches,
            avgDeaths: sumDeaths / totalMatches,
            avgAssists: sumAssists / totalMatches,
            avgTripleKills: sumTripleKills / totalMatches,
            avgQuadroKills: sumQuadroKills / totalMatches,
            avgPentaKills: sumPentaKills / totalMatches,
            avgHeadshots: sumHeadshots / totalMatches,
            avgHeadshotPercentage: sumHeadshotPercentage / totalMatches,
            avgKdRatio: sumKdRatio / totalMatches,
            avgKrRatio: sumKrRatio / totalMatches,
            avgMvps: sumMvps / totalMatches,
            totalMatchesPlayed: totalMatches,
            totalMatchesWon: sumMatchesWon,
            winPercentage: (sumMatchesWon / totalMatches) * 100
        };
    }

    /**
     * Create empty map statistics object
     * @returns {Object}
     */
    function createEmptyMapStats() {
        return {
            avgKills: 0,
            avgDeaths: 0,
            avgAssists: 0,
            avgTripleKills: 0,
            avgQuadroKills: 0,
            avgPentaKills: 0,
            avgHeadshots: 0,
            avgHeadshotPercentage: 0,
            avgKdRatio: 0,
            avgKrRatio: 0,
            avgMvps: 0,
            totalMatchesPlayed: 0,
            totalMatchesWon: 0,
            winPercentage: 0
        };
    }

    /**
     * Matchmaking data UI components
     */


    /**
     * Inject matchmaking data into the page
     * @param {Object} matchmakingData - Matchmaking data object
     */
    async function injectMatchmakingData(matchmakingData) {
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

    /**
     * Main content script for FACEIT CS2 Predictor
     * Orchestrates match prediction display and statistics
     */


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
        if (isMatchFinished()) {
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

})();
