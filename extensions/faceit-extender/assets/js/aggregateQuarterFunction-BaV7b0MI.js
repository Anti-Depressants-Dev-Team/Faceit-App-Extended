var e=`
  function quarterStartMonth(month) {
    return Math.floor((month - 1) / 3) * 3 + 1;
  }

  function aggregateQuarter(yearStats, currentMonthNum) {
    if (!yearStats || typeof yearStats !== 'object' || !(currentMonthNum >= 1 && currentMonthNum <= 12)) return null;
    var sums = { m1: 0, m3: 0, m4: 0, m5: 0, m8: 0, m10: 0, m11: 0, m12: 0, m22: 0, m23: 0, m25: 0, m26: 0, m27: 0, m28: 0 };
    var adrByRounds = 0;
    var winRateByMatches = 0;
    var monthsFound = 0;
    for (var m = quarterStartMonth(currentMonthNum); m <= currentMonthNum; m++) {
      var block = yearStats[(m < 10 ? '0' : '') + m];
      if (!block || typeof block !== 'object') continue;
      monthsFound++;
      for (var key in sums) sums[key] += Number(block[key]) || 0;
      adrByRounds += (Number(block.k17) || 0) * (Number(block.m8) || 0);
      winRateByMatches += (Number(block.k6) || 0) * (Number(block.m1) || 0);
    }
    if (!monthsFound || sums.m8 <= 0) return null;
    // Rates are re-derived from the summed counts, ADR weighted by rounds.
    sums.k1 = sums.m1 > 0 ? sums.m3 / sums.m1 : 0;
    sums.k9 = sums.m3 / sums.m8;
    sums.k17 = adrByRounds / sums.m8;
    sums.k6 = sums.m1 > 0 ? winRateByMatches / sums.m1 : 0;
    return sums;
  }
`;export{e as t};