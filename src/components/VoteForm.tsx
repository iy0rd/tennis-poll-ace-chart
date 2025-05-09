
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { tennisPlayers } from "@/data/tennisPlayers";
import PlayerCard from "@/components/PlayerCard";
import { Poll } from "lucide-react";

interface VoteFormProps {
  onVoteSubmit: (playerId: string) => void;
  isVoting: boolean;
}

const VoteForm = ({ onVoteSubmit, isVoting }: VoteFormProps) => {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPlayer) {
      toast({
        title: "Selection required",
        description: "Please select a tennis player to vote",
        variant: "destructive",
      });
      return;
    }
    
    onVoteSubmit(selectedPlayer);
    toast({
      title: "Vote submitted!",
      description: "Thank you for participating in our poll",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tennisPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isSelected={selectedPlayer === player.id}
            onClick={() => setSelectedPlayer(player.id)}
          />
        ))}
      </div>
      
      <Button 
        type="submit"
        disabled={!selectedPlayer || isVoting}
        className="w-full bg-tennis-blue hover:bg-tennis-blue/80 text-white py-6 rounded-lg mt-4 transition-all"
      >
        <Poll className="mr-2 h-5 w-5" />
        {isVoting ? "Submitting..." : "Submit Vote"}
      </Button>
    </form>
  );
};

export default VoteForm;
