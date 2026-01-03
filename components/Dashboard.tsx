import React from 'react';
import { ToolDefinition, ToolId } from '../types';

interface DashboardProps {
  tools: ToolDefinition[];
  onSelectTool: (id: ToolId) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ tools, onSelectTool }) => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Developer Tools Suite</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A collection of essential utilities and AI-powered helpers designed to streamline your development workflow. Secure, client-side, and fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.filter(t => t.id !== ToolId.DASHBOARD).map((tool) => (
          <button
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className="group bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-indigo-500/50 rounded-xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col h-full"
          >
            <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-900/20 transition-colors">
              {tool.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white">{tool.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};