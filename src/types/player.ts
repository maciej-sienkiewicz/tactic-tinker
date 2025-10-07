export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
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
