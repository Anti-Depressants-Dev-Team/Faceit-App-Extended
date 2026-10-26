import{t as e}from"./calculateStatsFunction-ZrEwXxxo.js";var t=`
  ${e}
  
  self.onmessage = function(e) {
    try {
      if (!e || !e.data) {
        self.postMessage({ success: false, error: 'No message data' });
        return;
      }
      const { playerStatsByYear, currentYear } = e.data;

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

      // Calculate year stats
      const yearStatsResult = calculateStats(yearStats);

      self.postMessage({
        success: true,
        stats: yearStatsResult,
      });
    } catch (error) {
      self.postMessage({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };`;export{t as extendedStatsYearWorkerCode};