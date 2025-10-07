import { Player } from "@/types/player";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface PlayerCardProps {
  player: Player;
  isAssigned: boolean;
  onClick: () => void;
}

export const PlayerCard = ({ player, isAssigned, onClick }: PlayerCardProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("player", JSON.stringify(player));
  };

  return (
    <Card
      draggable={!isAssigned}
      onDragStart={handleDragStart}
      onClick={onClick}
      className={`
        p-4 cursor-pointer transition-all duration-200
        hover:shadow-lg hover:scale-[1.02] border-2
        ${isAssigned 
          ? 'opacity-60 border-muted bg-muted/20' 
          : 'border-border hover:border-primary hover:shadow-primary/20'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <GripVertical className="w-5 h-5 text-muted-foreground" />
        
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-md">
          <img 
            src={player.photo} 
            alt={player.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{player.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className="text-xs font-semibold">#{player.number}</Badge>
            <Badge variant="outline" className="text-xs">{player.position}</Badge>
            <span className="text-xs font-bold text-primary">{player.rating}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
