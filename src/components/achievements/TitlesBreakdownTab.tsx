
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

interface TitlesBreakdownTabProps {
  tennisPlayers: TennisPlayer[];
  playerStats: PlayerStats;
}

const TitlesBreakdownTab: React.FC<TitlesBreakdownTabProps> = ({ tennisPlayers, playerStats }) => {
  return (
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
  );
};

export default TitlesBreakdownTab;
