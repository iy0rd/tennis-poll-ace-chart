
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

interface MajorTitlesTabProps {
  tennisPlayers: TennisPlayer[];
  playerStats: PlayerStats;
}

const MajorTitlesTab: React.FC<MajorTitlesTabProps> = ({ tennisPlayers, playerStats }) => {
  return (
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
  );
};

export default MajorTitlesTab;
