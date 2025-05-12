
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TennisPlayer } from "@/data/tennisPlayers";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tennis } from "lucide-react";

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
        <Avatar className="w-24 h-24 mb-3">
          <AvatarImage src={player.image} alt={player.fullName} className="object-cover" />
          <AvatarFallback className="text-3xl font-bold text-gray-500 bg-tennis-green/20">
            <Tennis className="w-12 h-12 text-tennis-blue" />
          </AvatarFallback>
        </Avatar>
        
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
