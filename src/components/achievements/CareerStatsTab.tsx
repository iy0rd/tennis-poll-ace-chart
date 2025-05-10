
import React from 'react';
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
import { TennisPlayer } from '@/data/tennisPlayers';
import { PlayerStats } from '@/data/playerStats';

interface CareerStatsTabProps {
  tennisPlayers: TennisPlayer[];
  playerStats: PlayerStats;
}

const CareerStatsTab: React.FC<CareerStatsTabProps> = ({ tennisPlayers, playerStats }) => {
  return (
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
  );
};

export default CareerStatsTab;
