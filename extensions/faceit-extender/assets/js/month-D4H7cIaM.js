import{t as e}from"./calculateStatsFunction-ZrEwXxxo.js";var t=`
  ${e}
  
  self.onmessage = function(e) {
    try {
      if (!e || !e.data) {
        self.postMessage({ success: false, error: 'No message data' });
        return;
      }
      const { playerStatsByYear, currentYear, currentMonth } = e.data;

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

      // Extract month data from year data object
      let monthStats = null;
      if (currentMonth && typeof currentMonth === 'string') {
        const monthNumber = currentMonth.split('-')[1];
        if (monthNumber && yearStats[monthNumber] && typeof yearStats[monthNumber] === 'object') {
          monthStats = yearStats[monthNumber];
        }
      }

      if (!monthStats) {
        self.postMessage({ success: false, error: 'Month data not found' });
        return;
      }

      // Calculate month stats
      const monthStatsResult = calculateStats(monthStats);

      self.postMessage({
        success: true,
        stats: monthStatsResult,
      });
    } catch (error) {
      self.postMessage({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };`;export{t as extendedStatsMonthWorkerCode};