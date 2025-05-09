
export interface TennisPlayer {
  id: string;
  name: string;
  fullName: string;
  country: string;
  image: string;
  grandSlams: number;
  careerTitles: number;
  weeksAtNumberOne: number;
  description: string;
}

export const tennisPlayers: TennisPlayer[] = [
  {
    id: "federer",
    name: "Federer",
    fullName: "Roger Federer",
    country: "Switzerland",
    image: "/federer.png",
    grandSlams: 20,
    careerTitles: 103,
    weeksAtNumberOne: 310,
    description: "Known for his elegant style and versatility, Roger Federer has been considered by many as the most naturally gifted player in tennis history."
  },
  {
    id: "nadal",
    name: "Nadal",
    fullName: "Rafael Nadal",
    country: "Spain",
    image: "/nadal.png",
    grandSlams: 22,
    careerTitles: 92,
    weeksAtNumberOne: 209,
    description: "The 'King of Clay' is known for his incredible intensity, topspin-heavy shots, and unmatched mental strength throughout his career."
  },
  {
    id: "djokovic",
    name: "Djokovic",
    fullName: "Novak Djokovic",
    country: "Serbia",
    image: "/djokovic.png",
    grandSlams: 24,
    careerTitles: 98,
    weeksAtNumberOne: 418,
    description: "With extraordinary flexibility and return of serve, Djokovic has achieved the most weeks as world No. 1 and holds the record for most Grand Slam titles."
  }
];
