import{t as e}from"./calculateStatsFunction-ZrEwXxxo.js";var t=`
  ${e}

  self.onmessage = function(e) {
    try {
      if (!e || !e.data) {
        self.postMessage({ success: false, error: 'No message data' });
        return;
      }
      const { playerStatsByYear } = e.data;

      if (!playerStatsByYear || !Array.isArray(playerStatsByYear)) {
        self.postMessage({ success: false, error: 'Invalid data' });
        return;
      }

      const maxItemsToCheck = 10;
      const itemsToCheck = playerStatsByYear.slice(0, maxItemsToCheck);

      // Aggregate stats from days until we reach 30 matches
      const rangeAggregated = {
        k1: 0, // Average Kills (will be recalculated)
        k6: 0, // Win Rate % (will be recalculated)
        k9: 0, // Average K/R Ratio (will be recalculated)
        k17: 0, // ADR (will be averaged)
        m1: 0, // Total Matches
        m3: 0, // Total Kills
        m4: 0, // Total Deaths
        m5: 0, // Total Assists
        m8: 0, // Total Rounds
        m10: 0, // Total Triple Kills
        m11: 0, // Total Quadro Kills
        m12: 0, // Total Penta Kills
        m22: 0, // Total Entry Wins
        m23: 0, // Total Entry Count
        m25: 0, // Total 1v1 Wins
        m26: 0, // Total 1v1 Count
        m27: 0, // Total 1v2 Wins
        m28: 0, // Total 1v2 Count
      };

      const TARGET_MATCHES = 30;
      let daysFound = 0;
      
      // Helper function to get day data from extracted year data structure
      const getDayData = (extractedYearData, year, month, day) => {
        if (!extractedYearData || !extractedYearData.yearData) return null;
        
        const monthKey = String(month).padStart(2, '0');
        const dayKey = String(day).padStart(2, '0');
        const monthData = extractedYearData.yearData[monthKey];
        if (monthData && typeof monthData === 'object') {
          return monthData[dayKey];
        }
        return null;
      };

      // Build year data map for quick lookup
      // playerStatsByYear is an array of items, each item has structure: { [year]: { [month]: { [day]: stats } } }
      // OR it might be: { [numericKey]: { [year]: { [month]: { [day]: stats } } } }
      const yearDataMap = {};
      const today = new Date();
      const currentYear = today.getFullYear();
      
      // Helper to extract year data from an item (handles both structures)
      const extractYearData = (item, targetYear) => {
        if (!item || typeof item !== 'object') return null;
        
        // First, try direct year key: { '2025': {...} }
        if (item[targetYear] && typeof item[targetYear] === 'object') {
          return { yearKey: targetYear, yearData: item[targetYear], item: item };
        }
        
        // If not found, check if year is nested under numeric keys: { '0': { '2025': {...} } }
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const nested = item[key];
            if (nested && typeof nested === 'object' && nested[targetYear]) {
              return { yearKey: targetYear, yearData: nested[targetYear], item: nested };
            }
          }
        }
        
        return null;
      };
      
      // Walk back from the latest year that has data. A player who stopped
      // (or CS:GO, which ended in 2023) has nothing in the current year, and
      // the 365-day walk from today would never reach their matches.
      let anchorYear = currentYear;
      let latestYearWithData = 0;
      for (let i = 0; i < itemsToCheck.length; i++) {
        const item = itemsToCheck[i];
        if (!item || typeof item !== 'object') continue;
        for (const key in item) {
          if (/^[0-9]{4}$/.test(key)) latestYearWithData = Math.max(latestYearWithData, Number(key));
          else if (item[key] && typeof item[key] === 'object') {
            for (const nestedKey in item[key]) {
              if (/^[0-9]{4}$/.test(nestedKey)) latestYearWithData = Math.max(latestYearWithData, Number(nestedKey));
            }
          }
        }
      }
      if (latestYearWithData > 0 && latestYearWithData < currentYear) anchorYear = latestYearWithData;

      // Check 3 years back from the anchor (in case player hasn't played recently)
      for (let yearOffset = 0; yearOffset < 3; yearOffset++) {
        const year = (anchorYear - yearOffset).toString();
        yearDataMap[year] = [];
        // Search through all items to find ALL items that contain this year's data
        for (let i = 0; i < itemsToCheck.length; i++) {
          const item = itemsToCheck[i];
          const extracted = extractYearData(item, year);
          if (extracted) {
            yearDataMap[year].push(extracted);
          }
        }
      }

      // Start from today (or the anchor year's last day) and go backwards day by day
      let currentDate = anchorYear < currentYear ? new Date(anchorYear, 11, 31) : new Date(today);
      currentDate.setHours(23, 59, 59, 999); // Start from the end of that day
      
      // Limit search to 365 days back (1 year) to prevent infinite loops
      const maxDaysBack = 365;
      let daysChecked = 0;
      let daysWithData = 0;
      let daysWithoutData = 0;

      // Iterate backwards until we reach 30 matches or run out of data
      while (rangeAggregated.m1 < TARGET_MATCHES && daysChecked < maxDaysBack) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const yearKey = year.toString();
        const dateStr = yearKey + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        
        // Get all items that contain this year's data
        const yearItems = yearDataMap[yearKey] || [];
        
        let foundDataForDay = false;
        
        // Check all items for this year (in case data is split across multiple items)
        for (let i = 0; i < yearItems.length; i++) {
          const extractedYearData = yearItems[i];
          const dayData = getDayData(extractedYearData, year, month, day);
          
          if (dayData && typeof dayData === 'object') {
            foundDataForDay = true;
            const dayMatches = Number(dayData.m1) || 0;
            
            // Check if adding this day's matches would exceed 30
            if (rangeAggregated.m1 + dayMatches > TARGET_MATCHES) {
              // We've reached 30 matches, stop here
              break;
            }
            
            daysFound++;
            daysWithData++;
            // Sum all totals
            rangeAggregated.m1 += dayMatches;
            rangeAggregated.m3 += Number(dayData.m3) || 0;
            rangeAggregated.m4 += Number(dayData.m4) || 0;
            rangeAggregated.m5 += Number(dayData.m5) || 0;
            rangeAggregated.m8 += Number(dayData.m8) || 0;
            rangeAggregated.m10 += Number(dayData.m10) || 0;
            rangeAggregated.m11 += Number(dayData.m11) || 0;
            rangeAggregated.m12 += Number(dayData.m12) || 0;
            rangeAggregated.m22 += Number(dayData.m22) || 0;
            rangeAggregated.m23 += Number(dayData.m23) || 0;
            rangeAggregated.m25 += Number(dayData.m25) || 0;
            rangeAggregated.m26 += Number(dayData.m26) || 0;
            rangeAggregated.m27 += Number(dayData.m27) || 0;
            rangeAggregated.m28 += Number(dayData.m28) || 0;
            
            // Sum averages (will be recalculated from totals)
            rangeAggregated.k6 += Number(dayData.k6) || 0;
            rangeAggregated.k9 += Number(dayData.k9) || 0;
            // ADR: accumulate weighted sum (ADR * rounds) for proper weighted average
            const dayRounds = Number(dayData.m8) || 0;
            const dayADR = Number(dayData.k17) || 0;
            rangeAggregated.k17 += dayADR * dayRounds;
            
            // Break after finding data for this day (each day should only appear once per item)
            break;
          }
        }
        
        if (!foundDataForDay && daysChecked < 10) {
          // Only log first 10 days without data to avoid spam
          daysWithoutData++;
        }
        
        // Check if we've reached 30 matches
        if (rangeAggregated.m1 >= TARGET_MATCHES) {
          break;
        }
        
        // Move to previous day
        currentDate.setDate(currentDate.getDate() - 1);
        daysChecked++;
      }
      
      // Only calculate if we have matches (even if less than 30)
      if (rangeAggregated.m1 > 0 && rangeAggregated.m8 > 0) {
        // Calculate averages from aggregated totals
        rangeAggregated.k1 = (rangeAggregated.m1 > 0) ? rangeAggregated.m3 / rangeAggregated.m1 : 0;
        rangeAggregated.k9 = rangeAggregated.m3 / rangeAggregated.m8; // KPR
        rangeAggregated.k17 = rangeAggregated.k17 / rangeAggregated.m8; // ADR (weighted average)
        rangeAggregated.k6 = rangeAggregated.k6 / daysFound; // Win Rate (average of daily win rates)
        
        // Calculate stats
        const statsResult = calculateStats(rangeAggregated);
        
        self.postMessage({
          success: true,
          stats: statsResult,
        });
      } else {
        self.postMessage({ 
          success: false, 
          error: 'No valid data found or insufficient matches. Matches: ' + rangeAggregated.m1 + ', Rounds: ' + rangeAggregated.m8 + ', Days checked: ' + daysChecked
        });
      }
    } catch (error) {
      self.postMessage({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  };`;export{t as extendedStatsLast30MatchesWorkerCode};