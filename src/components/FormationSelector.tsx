import { Button } from "@/components/ui/button";
import { formations } from "@/data/formations";

interface FormationSelectorProps {
  selectedFormation: number;
  onSelectFormation: (index: number) => void;
}

export const FormationSelector = ({ selectedFormation, onSelectFormation }: FormationSelectorProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {formations.map((formation, index) => (
        <Button
          key={formation.name}
          onClick={() => onSelectFormation(index)}
          variant={selectedFormation === index ? "default" : "outline"}
          className="font-semibold"
        >
          {formation.name}
        </Button>
      ))}
    </div>
  );
};
