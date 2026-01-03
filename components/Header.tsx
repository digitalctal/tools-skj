import React from 'react';
import { ToolId } from '../types';
import { IconCode } from './icons';

interface HeaderProps {
  currentTool: ToolId;
}

export const Header: React.FC<HeaderProps> = ({ currentTool }) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 h-16 flex items-center justify-between px-6 sticky top-0 z-10 shadow-md">
      <div className="flex items-center space-x-3">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <IconCode className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-100 leading-tight">DevToolKit</h1>
          <p className="text-xs text-slate-400">Senior Dev Suite</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300 border border-slate-600">
          v1.0.0 (React/TS)
        </div>
      </div>
    </header>
  );
};