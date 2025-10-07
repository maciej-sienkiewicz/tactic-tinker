import { Player } from "@/types/player";
import { User } from "lucide-react";

interface PlayerSlotProps {
  player: Player | null;
}

export const PlayerSlot = ({ player }: PlayerSlotProps) => {
  return (
    <div className="relative group cursor-pointer">
      <div className={`
        w-14 h-14 rounded-full border-4 flex items-center justify-center
        transition-all duration-300 shadow-lg
        ${player 
          ? 'bg-primary border-primary-foreground shadow-primary/50 hover:scale-110' 
          : 'bg-player-slot/20 border-player-slot/40 border-dashed hover:border-player-ring hover:bg-player-slot/30'
        }
      `}>
        {player ? (
          <div className="text-center">
            <div className="text-primary-foreground font-bold text-xs">{player.number}</div>
          </div>
        ) : (
          <User className="w-6 h-6 text-player-slot/60" />
        )}
      </div>
      
      {player && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 
                      bg-card text-card-foreground px-2 py-1 rounded text-xs font-medium
                      whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity
                      shadow-lg border border-border z-10">
          {player.name}
        </div>
      )}
    </div>
  );
};
