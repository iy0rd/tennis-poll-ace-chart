
import React from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { tennisPlayers } from "@/data/tennisPlayers";

interface ResultsChartProps {
  votes: Record<string, number>;
}

const ResultsChart = ({ votes }: ResultsChartProps) => {
  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
  
  const chartData = tennisPlayers.map((player) => {
    const voteCount = votes[player.id] || 0;
    const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
    
    return {
      name: player.name,
      votes: voteCount,
      percentage,
    };
  });

  const colors = ["#90EE90", "#1D78C1", "#DFFF4F"];

  return (
    <div className="w-full">
      <p className="text-center mb-4 text-gray-600">
        Total votes: <span className="font-bold">{totalVotes}</span>
      </p>
      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 border rounded shadow">
                      <p className="font-bold">{data.name}</p>
                      <p>{data.votes} vote{data.votes !== 1 ? 's' : ''}</p>
                      <p>{data.percentage}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="votes" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {chartData.map((player, index) => (
          <div key={player.name} className="text-center">
            <div className="flex items-center justify-center">
              <div
                className="w-3 h-3 rounded-full mr-1"
                style={{ backgroundColor: colors[index] }}
              />
              <p className="font-semibold">{player.name}</p>
            </div>
            <p className="text-sm">{player.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsChart;
