
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { tennisPlayers } from "@/data/tennisPlayers";
import { playerStats } from "@/data/playerStats";
import { Trophy, Award, Medal } from "lucide-react";
import MajorTitlesTab from '@/components/achievements/MajorTitlesTab';
import SurfaceWinsTab from '@/components/achievements/SurfaceWinsTab';
import TitlesBreakdownTab from '@/components/achievements/TitlesBreakdownTab';
import CareerStatsTab from '@/components/achievements/CareerStatsTab';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-tennis-green/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-red-500">
            Tennis Legends Achievements
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Explore the remarkable careers of tennis greats
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Major Titles
            </TabsTrigger>
            <TabsTrigger value="surfaces" className="flex items-center gap-2">
              <Medal className="h-4 w-4" />
              Wins by Surface
            </TabsTrigger>
            <TabsTrigger value="titles" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Titles Breakdown
            </TabsTrigger>
            <TabsTrigger value="rankings" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Career Stats
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <MajorTitlesTab tennisPlayers={tennisPlayers} playerStats={playerStats} />
          </TabsContent>
          
          <TabsContent value="surfaces">
            <SurfaceWinsTab tennisPlayers={tennisPlayers} playerStats={playerStats} />
          </TabsContent>
          
          <TabsContent value="titles">
            <TitlesBreakdownTab tennisPlayers={tennisPlayers} playerStats={playerStats} />
          </TabsContent>
          
          <TabsContent value="rankings">
            <CareerStatsTab tennisPlayers={tennisPlayers} playerStats={playerStats} />
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <a href="/" className="text-red-500 hover:text-red-700 underline">
            Back to Tennis Poll
          </a>
        </div>
      </div>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 Tennis Poll Ace Chart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Achievements;
