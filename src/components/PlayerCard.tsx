import { Player } from "@/types/player";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface PlayerCardProps {
  player: Player;
  isAssigned: boolean;
}

export const PlayerCard = ({ player, isAssigned }: PlayerCardProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("player", JSON.stringify(player));
  };

  return (
    <Card
      draggable={!isAssigned}
      onDragStart={handleDragStart}
      className={`
        p-4 cursor-grab active:cursor-grabbing transition-all duration-200
        hover:shadow-lg hover:scale-[1.02] border-2
        ${isAssigned 
          ? 'opacity-50 cursor-not-allowed border-muted' 
          : 'border-border hover:border-primary'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <GripVertical className="w-5 h-5 text-muted-foreground" />
        
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">
          {player.number}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{player.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className="text-xs">{player.position}</Badge>
            <span className="text-xs text-muted-foreground">RAT: {player.rating}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
