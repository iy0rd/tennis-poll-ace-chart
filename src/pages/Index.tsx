
import React from 'react';
import TennisPoll from '@/components/TennisPoll';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-tennis-green/30 py-12 px-4">
      <TennisPoll />
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 Tennis Poll Ace Chart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
