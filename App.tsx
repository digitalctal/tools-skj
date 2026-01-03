import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToolId, ToolDefinition } from './types';
import { JsonFormatter } from './components/tools/JsonFormatter';
import { Base64Converter } from './components/tools/Base64Converter';
import { AiExplainer } from './components/tools/AiExplainer';
import { Dashboard } from './components/Dashboard';
import { IconCode, IconSwitch, IconSparkles, IconFingerprint, IconHome } from './components/icons';

const TOOLS: ToolDefinition[] = [
  {
    id: ToolId.DASHBOARD,
    name: 'Dashboard',
    description: 'Overview of all available tools.',
    icon: <IconHome />,
    category: 'generators' 
  },
  {
    id: ToolId.JSON_FORMATTER,
    name: 'JSON Formatter',
    description: 'Validate, beautify, and minify JSON data with error reporting.',
    icon: <IconCode />,
    category: 'converters'
  },
  {
    id: ToolId.BASE64,
    name: 'Base64 Converter',
    description: 'Encode and decode Base64 strings quickly and securely.',
    icon: <IconSwitch />,
    category: 'converters'
  },
  {
    id: ToolId.AI_EXPLAINER,
    name: 'AI Code Explainer',
    description: 'Get clear, human-readable explanations for complex code snippets.',
    icon: <IconSparkles />,
    category: 'ai'
  },
];

const App: React.FC = () => {
  const [currentToolId, setCurrentToolId] = useState<ToolId>(ToolId.DASHBOARD);

  const renderTool = () => {
    switch (currentToolId) {
      case ToolId.JSON_FORMATTER:
        return <JsonFormatter />;
      case ToolId.BASE64:
        return <Base64Converter />;
      case ToolId.AI_EXPLAINER:
        return <AiExplainer />;
      case ToolId.DASHBOARD:
      default:
        return <Dashboard tools={TOOLS} onSelectTool={setCurrentToolId} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans">
      <Header currentTool={currentToolId} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-slate-800/50 border-r border-slate-800 p-4 space-y-2 overflow-y-auto">
          <div className="mb-6 px-3">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Navigation</p>
          </div>
          
          <button
             onClick={() => setCurrentToolId(ToolId.DASHBOARD)}
             className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentToolId === ToolId.DASHBOARD ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
          >
             <IconHome className="w-5 h-5" />
             <span>Dashboard</span>
          </button>

          <div className="pt-4 mb-2 px-3">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tools</p>
          </div>

          {TOOLS.filter(t => t.id !== ToolId.DASHBOARD).map(tool => (
            <button
              key={tool.id}
              onClick={() => setCurrentToolId(tool.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentToolId === tool.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
            >
              <div className={currentToolId === tool.id ? 'text-white' : 'text-slate-500'}>
                 {React.cloneElement(tool.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
              </div>
              <span>{tool.name}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-slate-900 relative">
           <div className="max-w-6xl mx-auto h-full">
             {renderTool()}
           </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;