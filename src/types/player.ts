export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  rating: number;
  photo: string;
  preferredFoot: 'Lewa' | 'Prawa' | 'Obie';
  age: number;
  nationality: string;
  trainingAttendance: number; // percentage
  matchHistory: MatchHistory[];
}

export interface MatchHistory {
  date: string;
  opponent: string;
  result: string;
  minutes: number;
  goals: number;
  assists: number;
  rating: number;
}

export interface PositionCoords {
  x: number;
  y: number;
}

export interface Formation {
  name: string;
  positions: PositionCoords[];
}
