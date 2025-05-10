
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

interface SurfaceWinsTabProps {
  tennisPlayers: TennisPlayer[];
  playerStats: PlayerStats;
}

const SurfaceWinsTab: React.FC<SurfaceWinsTabProps> = ({ tennisPlayers, playerStats }) => {
  return (
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
  );
};

export default SurfaceWinsTab;
