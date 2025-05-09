
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PollCardProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const PollCard = ({ children, title, className = "" }: PollCardProps) => {
  return (
    <Card className={`tennis-card ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-2xl font-bold text-tennis-blue">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default PollCard;
