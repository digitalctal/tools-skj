import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-slate-500 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} DevToolKit. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Built with React, TypeScript & Gemini</p>
      </div>
    </footer>
  );
};