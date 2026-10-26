import{t as e}from"./aggregateQuarterFunction-BaV7b0MI.js";import{t}from"./calculateStatsFunction-ZrEwXxxo.js";var n=`
  ${t}
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
      const yearData = playerStatsByYear.slice(0, 10).find(function(item) {
        return item && item[currentYear] && typeof item[currentYear] === 'object';
      });
      const quarterStats = yearData && typeof currentMonth === 'string'
        ? aggregateQuarter(yearData[currentYear], Number(currentMonth.split('-')[1]))
        : null;
      if (!quarterStats) {
        self.postMessage({ success: false, error: 'Quarter data not found' });
        return;
      }
      self.postMessage({ success: true, stats: calculateStats(quarterStats) });
    } catch (error) {
      self.postMessage({ success: false, error: error instanceof Error ? error.message : 'Unknown error' });
    }
  };`;export{n as extendedStatsQuarterWorkerCode};