/**
 * Statistics calculation functions
 */

import { STATS_CONFIG } from '../config.js';

/**
 * Calculate team map statistics
 * @param {Object} teamStats - Team statistics object
 * @param {number} daysBefore - Number of days to look back
 * @returns {Object} Calculated team statistics
 */
export function calculateTeamMapStats(teamStats, daysBefore = STATS_CONFIG.DAYS_BEFORE_DEFAULT) {
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

