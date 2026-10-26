var e=`
  function calculateStats(stats) {
    if (!stats || typeof stats !== 'object') {
      return null;
    }

    // FACEIT stat shortcodes:
    // k1: Avg Kills, k9: KPR, k17: ADR
    // m3: Kills, m4: Deaths, m5: Assists, m8: Rounds
    // m10/m11/m12: 3K/4K/5K rounds
    // m22/m23: Entry Wins/Count, m25/m26: 1v1 W/C, m27/m28: 1v2 W/C

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

    // Multi-Kill: ascending weights reflect true round-control impact.
    // 3K=1.0, 4K=1.5, 5K=2.0 — higher multi-kills are harder and more impactful.
    let multiKill = null;
    if (totalRounds > 0) {
      const tripleKills = Number(m10) || 0;
      const quadroKills = Number(m11) || 0;
      const pentaKills = Number(m12) || 0;

      const raw = ((tripleKills + quadroKills * 1.5 + pentaKills * 2.0) / totalRounds) * 100;
      multiKill = Math.max(0, Math.min(100, raw));
      multiKill = multiKill > 0 ? multiKill : null;
    }

    // Round Swing: entry efficiency + 1v1 clutch efficiency, each weighted by frequency.
    // Entry term:  (entryWinRate - 0.50) × (entryCount  / totalRounds) × 100
    // Clutch term: (1v1WinRate   - 0.50) × (clutchCount / totalRounds) × 100
    // Range: approximately -5 to +5.
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
  }
`;export{e as t};