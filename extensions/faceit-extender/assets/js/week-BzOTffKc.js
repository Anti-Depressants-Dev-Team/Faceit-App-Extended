import{t as e}from"./calculateStatsFunction-ZrEwXxxo.js";var t=`
  ${e}
  
  self.onmessage = function(e) {
    try {
      if (!e || !e.data) {
        self.postMessage({ success: false, error: 'No message data' });
        return;
      }
      const { playerStatsByYear, currentYear, currentMonth, currentDay } = e.data;

      if (!playerStatsByYear || !Array.isArray(playerStatsByYear)) {
        self.postMessage({ success: false, error: 'Invalid data' });
        return;
      }

      const maxItemsToCheck = 10;
      const itemsToCheck = playerStatsByYear.slice(0, maxItemsToCheck);

      // Find year data
      let yearData;
      for (let i = 0; i < itemsToCheck.length; i++) {
        const item = itemsToCheck[i];
        if (item && item[currentYear] && typeof item[currentYear] === 'object') {
          yearData = item;
          break;
        }
      }

      if (!yearData) {
        self.postMessage({ success: false, error: 'Year data not found' });
        return;
      }

      const yearStats = yearData[currentYear];
      if (!yearStats || typeof yearStats !== 'object') {
        self.postMessage({ success: false, error: 'Year stats not found' });
        return;
      }

      // Build a year -> months map across ALL items so cross-year lookups work.
      // Without this, iterating 7 days from early January silently misses December
      // of the previous year because we only searched the current year's stats.
      const yearMap = {};
      for (let i = 0; i < itemsToCheck.length; i++) {
        const item = itemsToCheck[i];
        if (!item || typeof item !== 'object') continue;
        for (const key in item) {
          if (!Object.prototype.hasOwnProperty.call(item, key)) continue;
          if (key.length !== 4) continue;
          const yearNum = Number(key);
          if (!Number.isInteger(yearNum) || yearNum < 1970 || yearNum > 9999) continue;
          const candidate = item[key];
          if (candidate && typeof candidate === 'object' && !yearMap[key]) {
            yearMap[key] = candidate;
          }
        }
      }
      if (!yearMap[currentYear]) yearMap[currentYear] = yearStats;

      let weekStats = null;

      let currentYearNum, currentMonthNum, currentDayNum;
      if (typeof currentDay === 'string' && currentDay.includes('-')) {
        const parts = currentDay.split('-');
        currentYearNum = parseInt(parts[0], 10);
        currentMonthNum = parseInt(parts[1], 10);
        currentDayNum = parseInt(parts[2], 10);
      } else if (typeof currentMonth === 'string' && currentMonth.includes('-')) {
        const parts = currentMonth.split('-');
        currentYearNum = parseInt(parts[0], 10);
        currentMonthNum = parseInt(parts[1], 10);
        currentDayNum = new Date().getDate();
      } else {
        const today = new Date();
        currentYearNum = today.getFullYear();
        currentMonthNum = today.getMonth() + 1;
        currentDayNum = today.getDate();
      }

      const validDate =
        Number.isFinite(currentYearNum) &&
        Number.isFinite(currentMonthNum) &&
        Number.isFinite(currentDayNum) &&
        currentMonthNum >= 1 && currentMonthNum <= 12 &&
        currentDayNum >= 1 && currentDayNum <= 31;

      if (validDate) {
        const weekAggregated = {
          k1: 0, k6: 0, k9: 0, k17: 0,
          m1: 0, m3: 0, m4: 0, m5: 0, m8: 0,
          m10: 0, m11: 0, m12: 0,
          m22: 0, m23: 0, m25: 0, m26: 0, m27: 0, m28: 0,
        };

        let daysFound = 0;
        const getDayData = (year, month, day) => {
          const yearKey = String(year);
          const monthKey = String(month).padStart(2, '0');
          const dayKey = String(day).padStart(2, '0');
          const yearBlock = yearMap[yearKey];
          if (!yearBlock || typeof yearBlock !== 'object') return null;
          const monthData = yearBlock[monthKey];
          if (!monthData || typeof monthData !== 'object') return null;
          const d = monthData[dayKey];
          return (d && typeof d === 'object') ? d : null;
        };

        for (let i = 0; i < 7; i++) {
          let checkYear = currentYearNum;
          let checkMonth = currentMonthNum;
          let checkDay = currentDayNum - i;

          let guard = 0;
          while (checkDay < 1 && guard++ < 24) {
            checkMonth--;
            if (checkMonth < 1) {
              checkMonth = 12;
              checkYear--;
            }
            const daysInPrevMonth = new Date(checkYear, checkMonth, 0).getDate();
            checkDay = daysInPrevMonth + checkDay;
          }

          const dayData = getDayData(checkYear, checkMonth, checkDay);

          if (dayData) {
            daysFound++;
            weekAggregated.m1 += Number(dayData.m1) || 0;
            weekAggregated.m3 += Number(dayData.m3) || 0;
            weekAggregated.m4 += Number(dayData.m4) || 0;
            weekAggregated.m5 += Number(dayData.m5) || 0;
            weekAggregated.m8 += Number(dayData.m8) || 0;
            weekAggregated.m10 += Number(dayData.m10) || 0;
            weekAggregated.m11 += Number(dayData.m11) || 0;
            weekAggregated.m12 += Number(dayData.m12) || 0;
            weekAggregated.m22 += Number(dayData.m22) || 0;
            weekAggregated.m23 += Number(dayData.m23) || 0;
            weekAggregated.m25 += Number(dayData.m25) || 0;
            weekAggregated.m26 += Number(dayData.m26) || 0;
            weekAggregated.m27 += Number(dayData.m27) || 0;
            weekAggregated.m28 += Number(dayData.m28) || 0;

            weekAggregated.k6 += Number(dayData.k6) || 0;
            weekAggregated.k9 += Number(dayData.k9) || 0;
            const dayRounds = Number(dayData.m8) || 0;
            const dayADR = Number(dayData.k17) || 0;
            weekAggregated.k17 += dayADR * dayRounds;
          }
        }

        if (daysFound > 0 && weekAggregated.m8 > 0) {
          weekAggregated.k1 = weekAggregated.m1 > 0 ? weekAggregated.m3 / weekAggregated.m1 : 0;
          weekAggregated.k9 = weekAggregated.m3 / weekAggregated.m8;
          weekAggregated.k17 = weekAggregated.k17 / weekAggregated.m8;
          weekAggregated.k6 = weekAggregated.k6 / daysFound;
          weekStats = weekAggregated;
        }
      }

      if (!weekStats) {
        self.postMessage({ success: false, error: 'Week data not found' });
        return;
      }

      const weekStatsResult = calculateStats(weekStats);

      self.postMessage({
        success: true,
        stats: weekStatsResult,
      });
    } catch (error) {
      self.postMessage({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  };`;export{t as extendedStatsWeekWorkerCode};