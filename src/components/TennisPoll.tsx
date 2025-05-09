
import React, { useState, useEffect } from "react";
import VoteForm from "@/components/VoteForm";
import ResultsChart from "@/components/ResultsChart";
import PollCard from "@/components/PollCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Poll, ChartBar } from "lucide-react";

// This would normally come from a database, but we'll simulate it locally
const initialVotes = {
  federer: 35,
  nadal: 28,
  djokovic: 42,
};

const TennisPoll = () => {
  const [votes, setVotes] = useState<Record<string, number>>(initialVotes);
  const [isVoting, setIsVoting] = useState(false);
  const [activeTab, setActiveTab] = useState("vote");
  
  const handleVoteSubmit = (playerId: string) => {
    setIsVoting(true);
    
    // Simulate network delay
    setTimeout(() => {
      setVotes((prev) => ({
        ...prev,
        [playerId]: (prev[playerId] || 0) + 1,
      }));
      setIsVoting(false);
      setActiveTab("results");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-tennis-blue">
          Tennis G.O.A.T. Poll
        </h1>
        <p className="text-gray-600 text-lg">
          Who is the greatest tennis player of all time?
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="vote" className="flex items-center gap-2">
            <Poll className="h-4 w-4" />
            Cast Your Vote
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <ChartBar className="h-4 w-4" />
            View Results
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="vote">
          <PollCard title="Select Your Tennis G.O.A.T.">
            <VoteForm onVoteSubmit={handleVoteSubmit} isVoting={isVoting} />
          </PollCard>
        </TabsContent>
        
        <TabsContent value="results">
          <PollCard title="Poll Results">
            <ResultsChart votes={votes} />
          </PollCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TennisPoll;
