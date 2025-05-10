
import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { tennisPlayers } from "@/data/tennisPlayers";
import { Trophy, Award, Medal } from "lucide-react";

// Updated career stats data based on Ultimate Tennis Statistics
const playerStats = {
  "federer": {
    hardCourtWins: 783,
    clayCourtWins: 223,
    grassCourtWins: 192,
    totalWins: 1251,
    olympicMedals: 1,
    tourFinals: 6,
    yearEndRanking: [6, 13, 6, 2, 1, 1, 1, 1, 1, 2, 3, 3, 2, 2, 3, 16, 3],
    matchWinRate: 82.1,
    hardCourtTitles: 71,
    clayCourtTitles: 11,
    grassCourtTitles: 19,
    masters1000: 28
  },
  "nadal": {
    hardCourtWins: 519,
    clayCourtWins: 474,
    grassCourtWins: 78,
    totalWins: 1076,
    olympicMedals: 2,
    tourFinals: 0,
    yearEndRanking: [47, 2, 2, 2, 1, 2, 1, 2, 1, 3, 5, 9, 1, 2, 2, 6, 9],
    matchWinRate: 83.2,
    hardCourtTitles: 25,
    clayCourtTitles: 63,
    grassCourtTitles: 4,
    masters1000: 36
  },
  "djokovic": {
    hardCourtWins: 700,
    clayCourtWins: 268,
    grassCourtWins: 121,
    totalWins: 1094,
    olympicMedals: 1,
    tourFinals: 7,
    yearEndRanking: [83, 16, 3, 2, 3, 1, 1, 2, 1, 1, 1, 2, 12, 1, 1, 1, 1],
    matchWinRate: 83.4,
    hardCourtTitles: 69,
    clayCourtTitles: 18,
    grassCourtTitles: 8,
    masters1000: 40
  }
};

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
            <Card>
              <CardHeader>
                <CardTitle>Grand Slam & Major Tournament Victories</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Grand Slams</TableHead>
                      <TableHead>Tour Finals</TableHead>
                      <TableHead>Olympic Medals</TableHead>
                      <TableHead>Total Career Titles</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tennisPlayers.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell className="font-medium">{player.fullName}</TableCell>
                        <TableCell>{player.grandSlams}</TableCell>
                        <TableCell>{playerStats[player.id].tourFinals}</TableCell>
                        <TableCell>{playerStats[player.id].olympicMedals}</TableCell>
                        <TableCell>{player.careerTitles}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="surfaces">
            <Card>
              <CardHeader>
                <CardTitle>Match Wins by Playing Surface</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Hard Court Wins</TableHead>
                      <TableHead>Clay Court Wins</TableHead>
                      <TableHead>Grass Court Wins</TableHead>
                      <TableHead>Total Wins</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tennisPlayers.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell className="font-medium">{player.fullName}</TableCell>
                        <TableCell>{playerStats[player.id].hardCourtWins}</TableCell>
                        <TableCell>{playerStats[player.id].clayCourtWins}</TableCell>
                        <TableCell>{playerStats[player.id].grassCourtWins}</TableCell>
                        <TableCell>{playerStats[player.id].totalWins}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="titles">
            <Card>
              <CardHeader>
                <CardTitle>Titles by Surface & Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Hard Court Titles</TableHead>
                      <TableHead>Clay Court Titles</TableHead>
                      <TableHead>Grass Court Titles</TableHead>
                      <TableHead>Masters 1000</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tennisPlayers.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell className="font-medium">{player.fullName}</TableCell>
                        <TableCell>{playerStats[player.id].hardCourtTitles}</TableCell>
                        <TableCell>{playerStats[player.id].clayCourtTitles}</TableCell>
                        <TableCell>{playerStats[player.id].grassCourtTitles}</TableCell>
                        <TableCell>{playerStats[player.id].masters1000}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rankings">
            <Card>
              <CardHeader>
                <CardTitle>Career Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Player</TableHead>
                      <TableHead>Weeks at #1</TableHead>
                      <TableHead>Year-End #1 Finishes</TableHead>
                      <TableHead>Win Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tennisPlayers.map((player) => {
                      const yearEndNo1Count = playerStats[player.id].yearEndRanking.filter(rank => rank === 1).length;
                      
                      return (
                        <TableRow key={player.id}>
                          <TableCell className="font-medium">{player.fullName}</TableCell>
                          <TableCell>{player.weeksAtNumberOne}</TableCell>
                          <TableCell>{yearEndNo1Count}</TableCell>
                          <TableCell>{playerStats[player.id].matchWinRate}%</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
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
