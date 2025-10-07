import { Player } from "@/types/player";
import { User } from "lucide-react";

interface PlayerSlotProps {
  player: Player | null;
  onClick?: () => void;
}

export const PlayerSlot = ({ player, onClick }: PlayerSlotProps) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className={`
        w-16 h-16 rounded-full border-4 flex items-center justify-center overflow-hidden
        transition-all duration-300 shadow-lg
        ${player 
          ? 'bg-card border-primary shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]' 
          : 'bg-player-slot/10 border-player-slot/40 border-dashed hover:border-player-ring hover:bg-player-slot/20'
        }
      `}>
        {player ? (
          <img 
            src={player.photo} 
            alt={player.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-6 h-6 text-player-slot/60" />
        )}
      </div>
      
      {/* Number badge */}
      {player && (
        <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground 
                      w-6 h-6 rounded-full flex items-center justify-center 
                      text-xs font-bold border-2 border-background">
          {player.number}
        </div>
      )}
      
      {player && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                      bg-card text-card-foreground px-3 py-1.5 rounded-lg text-xs font-medium
                      whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity
                      shadow-xl border border-border z-10">
          {player.name}
          <div className="text-[10px] text-muted-foreground">{player.position}</div>
        </div>
      )}
    </div>
  );
};
