
import React from 'react';
import TennisPoll from '@/components/TennisPoll';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tennis-green/10 via-white to-tennis-blue/20 py-12 px-4">
      <div className="absolute inset-0 bg-[url('/tennis-court-background.png')] bg-cover bg-center opacity-5 z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
        <TennisPoll />
        
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link to="/achievements">
            <Button variant="outline" className="bg-white hover:bg-gray-100">
              <Trophy className="mr-2 h-5 w-5" />
              View Players' Achievements
            </Button>
          </Link>
        </div>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 Tennis Poll Ace Chart. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
