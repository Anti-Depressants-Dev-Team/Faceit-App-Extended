import{t as e}from"./aggregateQuarterFunction-BaV7b0MI.js";var t=`
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

      // Extract month data from year data object (months are stored as "01", "02", etc. within the year object)
      let monthStats = null;
      if (currentMonth && typeof currentMonth === 'string') {
        // Extract month number from "YYYY-MM" format (e.g., "2025-01" -> "01")
        const monthNumber = currentMonth.split('-')[1];
        if (monthNumber && yearStats[monthNumber] && typeof yearStats[monthNumber] === 'object') {
          monthStats = yearStats[monthNumber];
        }
      }

      // Extract day data from month data object (days are stored as "01", "02", etc. within the month object)
      let dayStats = null;
      if (currentDay && typeof currentDay === 'string' && monthStats) {
        // Extract day number from "YYYY-MM-DD" format (e.g., "2025-01-15" -> "15")
        // or from "DD" format if it's just the day
        let dayNumber = null;
        if (currentDay.includes('-')) {
          // Format: "YYYY-MM-DD"
          dayNumber = currentDay.split('-')[2];
        } else {
          // Format: "DD" (just the day number)
          dayNumber = currentDay;
        }
        if (dayNumber && monthStats[dayNumber] && typeof monthStats[dayNumber] === 'object') {
          dayStats = monthStats[dayNumber];
        }
      }

      // Build a year -> months map across ALL items for correct cross-year lookups
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
      {
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
      }

      const calculateStats = (stats) => {
        if (!stats || typeof stats !== 'object') {
          return null;
        }

        const k1 = stats.k1;
        const k9 = stats.k9;
        const k17 = stats.k17;
        const m3 = stats.m3;
        const m4 = stats.m4;
        const m5 = stats.m5;
        const m8 = stats.m8;
        const m10 = stats.m10 || 0;
        const m11 = stats.m11 || 0;
        const m12 = stats.m12 || 0;
        const m22 = stats.m22 || 0;
        const m23 = stats.m23 || 0;
        const m25 = stats.m25 || 0;
        const m26 = stats.m26 || 0;
        const m27 = stats.m27 || 0;
        const m28 = stats.m28 || 0;

        const totalRounds = m8 ? Number(m8) : 0;
        const totalKills = Number(m3) || 0;
        const totalDeaths = Number(m4) || 0;
        const totalAssists = Number(m5) || 0;

        const avgKills = k1 ? Number(k1) : 0;
        const kpr = k9 ? Number(k9) : (totalRounds > 0 ? totalKills / totalRounds : 0);
        const dpr = totalRounds > 0 ? totalDeaths / totalRounds : 0;
        const apr = totalRounds > 0 ? totalAssists / totalRounds : 0;
        const adr = k17 ? Number(k17) : 0;

        let kast = null;
        if (totalRounds > 0) {
          // Non-KAST rounds are deaths that weren't traded, in rounds with no kill
          // or assist. Fitted against FACEIT's exact per-match KAST (see
          // estimateKastPercent in calculateStatsFromRaw.ts).
          const nonKastRounds = totalDeaths * (1 - 0.187) * Math.exp(-0.75 * kpr) * Math.exp(-1.1 * apr);
          kast = Math.max(0, Math.min(100, (1 - nonKastRounds / totalRounds) * 100));
        }

        let multiKill = null;
        if (totalRounds > 0) {
          const tripleKills = Number(m10) || 0;
          const quadroKills = Number(m11) || 0;
          const pentaKills = Number(m12) || 0;

          const raw = ((tripleKills + quadroKills * 1.5 + pentaKills * 2.0) / totalRounds) * 100;
          multiKill = Math.max(0, Math.min(100, raw));
          multiKill = multiKill > 0 ? multiKill : null;
        }

        let roundSwing = null;
        if (totalRounds > 0) {
          const entryWins  = Number(m22) || 0;
          const entryCount = Number(m23) || 0;
          const entryTerm  = entryCount > 0
            ? (entryWins / entryCount - 0.5) * (entryCount / totalRounds) * 100
            : 0;

          const clutch1v1Count = Number(m26) || 0;
          const clutch1v1Wins  = Number(m25) || 0;
          const clutchTerm     = clutch1v1Count > 0
            ? (clutch1v1Wins / clutch1v1Count - 0.5) * (clutch1v1Count / totalRounds) * 100
            : 0;

          if (entryCount > 0 || clutch1v1Count > 0) {
            roundSwing = Math.max(-5, Math.min(5, entryTerm + clutchTerm));
          }
        }

        return {
          roundSwing: roundSwing !== null ? roundSwing.toFixed(2) : 'N/A',
          dpr: (dpr > 0 && totalRounds > 0) ? dpr.toFixed(2) : 'N/A',
          kast: kast !== null ? kast.toFixed(1) : 'N/A',
          apr: totalRounds > 0 ? apr.toFixed(3) : 'N/A',
          multiKill: multiKill !== null ? multiKill.toFixed(1) : 'N/A',
          adr: adr > 0 ? adr.toFixed(1) : 'N/A',
          kpr: kpr > 0 ? kpr.toFixed(2) : 'N/A',
          avgKills: avgKills > 0 ? avgKills.toFixed(1) : 'N/A',
        };
      };

      // Calculate year, month, week, and day stats
      const yearStatsResult = calculateStats(yearStats);
      const monthStatsResult = monthStats ? calculateStats(monthStats) : null;
      const weekStatsResult = weekStats ? calculateStats(weekStats) : null;
      const dayStatsResult = dayStats ? calculateStats(dayStats) : null;
      const quarterStats = typeof currentMonth === 'string' ? aggregateQuarter(yearStats, Number(currentMonth.split('-')[1])) : null;
      const quarterStatsResult = quarterStats ? calculateStats(quarterStats) : null;

      self.postMessage({
        success: true,
        stats: {
          year: yearStatsResult,
          quarter: quarterStatsResult,
          month: monthStatsResult,
          week: weekStatsResult,
          day: dayStatsResult,
        }
      });
    } catch (error) {
      self.postMessage({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  };`;export{t as extendedStatsWorkerCode};