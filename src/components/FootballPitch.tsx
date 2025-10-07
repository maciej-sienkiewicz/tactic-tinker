import { Player } from "@/types/player";
import { PlayerSlot } from "./PlayerSlot";
import { PositionCoords } from "@/types/player";

interface FootballPitchProps {
  positions: PositionCoords[];
  assignedPlayers: (Player | null)[];
  onDropPlayer: (positionIndex: number, player: Player) => void;
  onPlayerClick: (player: Player) => void;
}

export const FootballPitch = ({ positions, assignedPlayers, onDropPlayer, onPlayerClick }: FootballPitchProps) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, positionIndex: number) => {
    e.preventDefault();
    const playerData = e.dataTransfer.getData("player");
    if (playerData) {
      const player = JSON.parse(playerData);
      onDropPlayer(positionIndex, player);
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-pitch-dark to-pitch-light rounded-lg overflow-hidden shadow-2xl">
      {/* Pitch lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Outer border */}
        <rect x="2" y="2" width="96" height="96" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        
        {/* Center line */}
        <line x1="2" y1="50" x2="98" y2="50" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        
        {/* Center circle */}
        <circle cx="50" cy="50" r="8" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        <circle cx="50" cy="50" r="0.5" fill="hsl(var(--pitch-line))" opacity="0.6" />
        
        {/* Penalty areas */}
        <rect x="25" y="2" width="50" height="15" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        <rect x="25" y="83" width="50" height="15" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        
        {/* Goal areas */}
        <rect x="37" y="2" width="26" height="6" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        <rect x="37" y="92" width="26" height="6" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.3" opacity="0.6" />
        
        {/* Goals */}
        <rect x="44" y="0" width="12" height="2" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.4" opacity="0.8" />
        <rect x="44" y="98" width="12" height="2" fill="none" stroke="hsl(var(--pitch-line))" strokeWidth="0.4" opacity="0.8" />
      </svg>

      {/* Player positions */}
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          <PlayerSlot 
            player={assignedPlayers[index]} 
            onClick={() => assignedPlayers[index] && onPlayerClick(assignedPlayers[index]!)}
          />
        </div>
      ))}
    </div>
  );
};
