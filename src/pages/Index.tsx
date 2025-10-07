import { useState } from "react";
import { FootballPitch } from "@/components/FootballPitch";
import { PlayerCard } from "@/components/PlayerCard";
import { FormationSelector } from "@/components/FormationSelector";
import { mockPlayers } from "@/data/mockPlayers";
import { formations } from "@/data/formations";
import { Player } from "@/types/player";
import { Trophy } from "lucide-react";

const Index = () => {
  const [selectedFormation, setSelectedFormation] = useState(0);
  const [assignedPlayers, setAssignedPlayers] = useState<(Player | null)[]>(
    new Array(11).fill(null)
  );

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

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Menedżer Składu</h1>
          </div>
          <p className="text-muted-foreground">
            Wybierz formację i przeciągnij zawodników na boisko
          </p>
        </div>

        {/* Formation Selector */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Formacja</h2>
          <FormationSelector
            selectedFormation={selectedFormation}
            onSelectFormation={handleFormationChange}
          />
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          {/* Pitch */}
          <div className="aspect-[3/4] lg:aspect-[2/3]">
            <FootballPitch
              positions={formations[selectedFormation].positions}
              assignedPlayers={assignedPlayers}
              onDropPlayer={handleDropPlayer}
            />
          </div>

          {/* Player List */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Dostępni zawodnicy ({mockPlayers.length})
            </h2>
            <div className="space-y-2 max-h-[800px] overflow-y-auto pr-2">
              {mockPlayers.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  isAssigned={isPlayerAssigned(player.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
