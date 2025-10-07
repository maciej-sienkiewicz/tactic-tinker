import { useState } from "react";
import { FootballPitch } from "@/components/FootballPitch";
import { PlayerCard } from "@/components/PlayerCard";
import { FormationSelector } from "@/components/FormationSelector";
import { PlayerDetailsDialog } from "@/components/PlayerDetailsDialog";
import { mockPlayers } from "@/data/mockPlayers";
import { formations } from "@/data/formations";
import { Player } from "@/types/player";
import { Trophy, Users, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [selectedFormation, setSelectedFormation] = useState(0);
  const [assignedPlayers, setAssignedPlayers] = useState<(Player | null)[]>(
    new Array(11).fill(null)
  );
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDropPlayer = (positionIndex: number, player: Player) => {
    setAssignedPlayers((prev) => {
      const newAssigned = [...prev];
      newAssigned[positionIndex] = player;
      return newAssigned;
    });
  };

  const handleFormationChange = (index: number) => {
    setSelectedFormation(index);
    setAssignedPlayers(new Array(11).fill(null));
  };

  const isPlayerAssigned = (playerId: number) => {
    return assignedPlayers.some((p) => p?.id === playerId);
  };

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    setDialogOpen(true);
  };

  const assignedCount = assignedPlayers.filter(p => p !== null).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Menedżer Składu</h1>
              <p className="text-muted-foreground mt-1">
                System zarządzania drużyną piłkarską
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="lineup" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted">
            <TabsTrigger value="lineup" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Skład
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="w-4 h-4" />
              Historia Meczów
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lineup" className="space-y-6">
            {/* Formation Selector */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Formacja</h2>
                <div className="text-sm text-muted-foreground">
                  Ustawiono: <span className="text-primary font-bold">{assignedCount}/11</span>
                </div>
              </div>
              <FormationSelector
                selectedFormation={selectedFormation}
                onSelectFormation={handleFormationChange}
              />
            </div>

            {/* Main Layout */}
            <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
              {/* Pitch */}
              <div className="aspect-[3/4] lg:aspect-[2/3] animate-fade-in">
                <FootballPitch
                  positions={formations[selectedFormation].positions}
                  assignedPlayers={assignedPlayers}
                  onDropPlayer={handleDropPlayer}
                  onPlayerClick={handlePlayerClick}
                />
              </div>

              {/* Player List */}
              <div className="space-y-3 animate-slide-up">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg sticky top-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Kadra ({mockPlayers.length})
                  </h2>
                  <div className="space-y-2 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                    {mockPlayers.map((player) => (
                      <PlayerCard
                        key={player.id}
                        player={player}
                        isAssigned={isPlayerAssigned(player.id)}
                        onClick={() => handlePlayerClick(player)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="bg-card border border-border rounded-xl p-12 shadow-lg text-center">
              <History className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Historia Meczów</h3>
              <p className="text-muted-foreground">
                Ta funkcja zostanie wkrótce zaimplementowana
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <PlayerDetailsDialog 
        player={selectedPlayer}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary-glow));
        }
      `}</style>
    </div>
  );
};

export default Index;
