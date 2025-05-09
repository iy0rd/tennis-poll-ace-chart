
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TennisPlayer } from "@/data/tennisPlayers";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
  player: TennisPlayer;
  isSelected: boolean;
  onClick: () => void;
}

const PlayerCard = ({ player, isSelected, onClick }: PlayerCardProps) => {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-300 hover:scale-105 border-2",
        isSelected
          ? "border-tennis-blue bg-tennis-blue/10"
          : "border-transparent"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden flex items-center justify-center">
          {/* In a real app, you'd use a real image here */}
          <div className="text-3xl font-bold text-gray-500">{player.name.charAt(0)}</div>
        </div>
        <h3 className="font-bold text-xl mb-1">{player.fullName}</h3>
        <p className="text-sm text-gray-500 mb-2">{player.country}</p>
        
        <div className="grid grid-cols-3 gap-2 w-full mb-3">
          <Stat label="Slams" value={player.grandSlams.toString()} />
          <Stat label="Titles" value={player.careerTitles.toString()} />
          <Stat label="Weeks #1" value={player.weeksAtNumberOne.toString()} />
        </div>

        <Badge variant={isSelected ? "default" : "outline"} className={isSelected ? "bg-tennis-blue" : ""}>
          {isSelected ? "Selected" : "Select"}
        </Badge>
      </CardContent>
    </Card>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-xs text-gray-500">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default PlayerCard;
