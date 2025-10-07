import { Formation } from "@/types/player";

export const formations: Formation[] = [
  {
    name: "4-4-2",
    positions: [
      { x: 50, y: 90 }, // GK
      { x: 20, y: 70 }, // LB
      { x: 40, y: 70 }, // CB
      { x: 60, y: 70 }, // CB
      { x: 80, y: 70 }, // RB
      { x: 20, y: 45 }, // LM
      { x: 40, y: 45 }, // CM
      { x: 60, y: 45 }, // CM
      { x: 80, y: 45 }, // RM
      { x: 35, y: 20 }, // ST
      { x: 65, y: 20 }, // ST
    ],
  },
  {
    name: "4-3-3",
    positions: [
      { x: 50, y: 90 }, // GK
      { x: 20, y: 70 }, // LB
      { x: 40, y: 70 }, // CB
      { x: 60, y: 70 }, // CB
      { x: 80, y: 70 }, // RB
      { x: 30, y: 50 }, // CM
      { x: 50, y: 50 }, // CM
      { x: 70, y: 50 }, // CM
      { x: 20, y: 20 }, // LW
      { x: 50, y: 15 }, // ST
      { x: 80, y: 20 }, // RW
    ],
  },
  {
    name: "3-5-2",
    positions: [
      { x: 50, y: 90 }, // GK
      { x: 30, y: 70 }, // CB
      { x: 50, y: 70 }, // CB
      { x: 70, y: 70 }, // CB
      { x: 15, y: 50 }, // LWB
      { x: 35, y: 50 }, // CM
      { x: 50, y: 50 }, // CM
      { x: 65, y: 50 }, // CM
      { x: 85, y: 50 }, // RWB
      { x: 35, y: 20 }, // ST
      { x: 65, y: 20 }, // ST
    ],
  },
  {
    name: "4-2-3-1",
    positions: [
      { x: 50, y: 90 }, // GK
      { x: 20, y: 70 }, // LB
      { x: 40, y: 70 }, // CB
      { x: 60, y: 70 }, // CB
      { x: 80, y: 70 }, // RB
      { x: 35, y: 55 }, // CDM
      { x: 65, y: 55 }, // CDM
      { x: 20, y: 35 }, // LM
      { x: 50, y: 35 }, // CAM
      { x: 80, y: 35 }, // RM
      { x: 50, y: 15 }, // ST
    ],
  },
];
