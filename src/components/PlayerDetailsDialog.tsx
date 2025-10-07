import { Player } from "@/types/player";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, TrendingUp, User } from "lucide-react";

interface PlayerDetailsDialogProps {
  player: Player | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PlayerDetailsDialog = ({ player, open, onOpenChange }: PlayerDetailsDialogProps) => {
  if (!player) return null;

  const avgRating = player.matchHistory.length > 0
    ? (player.matchHistory.reduce((sum, match) => sum + match.rating, 0) / player.matchHistory.length).toFixed(1)
    : "N/A";

  const totalGoals = player.matchHistory.reduce((sum, match) => sum + match.goals, 0);
  const totalAssists = player.matchHistory.reduce((sum, match) => sum + match.assists, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <img 
              src={player.photo} 
              alt={player.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-foreground">{player.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="font-semibold">{player.position}</Badge>
                <Badge variant="outline">#{player.number}</Badge>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Wiek</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{player.age}</p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Rating</span>
              </div>
              <p className="text-2xl font-bold text-primary">{player.rating}</p>
            </div>
          </div>

          {/* Preferred Foot & Nationality */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Lepsza noga:</span>
              <span className="font-semibold text-foreground">{player.preferredFoot}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Narodowość:</span>
              <span className="font-semibold text-foreground">{player.nationality}</span>
            </div>
          </div>

          {/* Training Attendance */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Obecność na treningach</span>
              </div>
              <span className="text-lg font-bold text-primary">{player.trainingAttendance}%</span>
            </div>
            <Progress value={player.trainingAttendance} className="h-2" />
          </div>

          {/* Season Stats */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Statystyki sezonu</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{totalGoals}</p>
                <p className="text-xs text-muted-foreground">Gole</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">{totalAssists}</p>
                <p className="text-xs text-muted-foreground">Asysty</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{avgRating}</p>
                <p className="text-xs text-muted-foreground">Śr. Ocena</p>
              </div>
            </div>
          </div>

          {/* Match History */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Historia meczów</h3>
            <div className="space-y-2">
              {player.matchHistory.map((match, index) => (
                <div 
                  key={index}
                  className="bg-muted/30 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{match.opponent}</p>
                      <p className="text-xs text-muted-foreground">{match.date}</p>
                    </div>
                    <Badge 
                      variant={match.result.startsWith(match.result.split('-')[0] > match.result.split('-')[1] ? match.result.split('-')[0] : '') ? "default" : "secondary"}
                    >
                      {match.result}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{match.minutes}' • {match.goals}⚽ • {match.assists}🅰️</span>
                    <span className="font-semibold text-primary">Ocena: {match.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
