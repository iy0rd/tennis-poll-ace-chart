
export interface PlayerStatItem {
  hardCourtWins: number;
  clayCourtWins: number;
  grassCourtWins: number;
  totalWins: number;
  olympicMedals: number;
  tourFinals: number;
  yearEndRanking: number[];
  matchWinRate: number;
  hardCourtTitles: number;
  clayCourtTitles: number;
  grassCourtTitles: number;
  masters1000: number;
}

export interface PlayerStats {
  [key: string]: PlayerStatItem;
}

// Updated career stats data based on Ultimate Tennis Statistics
export const playerStats: PlayerStats = {
  "federer": {
    hardCourtWins: 783,
    clayCourtWins: 223,
    grassCourtWins: 192,
    totalWins: 1251,
    olympicMedals: 1,
    tourFinals: 6,
    yearEndRanking: [6, 13, 6, 2, 1, 1, 1, 1, 1, 2, 3, 3, 2, 2, 3, 16, 3],
    matchWinRate: 82.1,
    hardCourtTitles: 71,
    clayCourtTitles: 11,
    grassCourtTitles: 19,
    masters1000: 28
  },
  "nadal": {
    hardCourtWins: 519,
    clayCourtWins: 474,
    grassCourtWins: 78,
    totalWins: 1076,
    olympicMedals: 2,
    tourFinals: 0,
    yearEndRanking: [47, 2, 2, 2, 1, 2, 1, 2, 1, 3, 5, 9, 1, 2, 2, 6, 9],
    matchWinRate: 83.2,
    hardCourtTitles: 25,
    clayCourtTitles: 63,
    grassCourtTitles: 4,
    masters1000: 36
  },
  "djokovic": {
    hardCourtWins: 700,
    clayCourtWins: 268,
    grassCourtWins: 121,
    totalWins: 1094,
    olympicMedals: 1,
    tourFinals: 7,
    yearEndRanking: [83, 16, 3, 2, 3, 1, 1, 2, 1, 1, 1, 2, 12, 1, 1, 1, 1],
    matchWinRate: 83.4,
    hardCourtTitles: 69,
    clayCourtTitles: 18,
    grassCourtTitles: 8,
    masters1000: 40
  }
};
