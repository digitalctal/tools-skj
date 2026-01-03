import React, { useState } from 'react';

export const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const formatJson = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-white">JSON Formatter</h2>
        <div className="space-x-2">
          <button onClick={minifyJson} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md text-sm font-medium transition-colors">Minify</button>
          <button onClick={formatJson} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-sm font-medium transition-colors">Beautify</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        <div className="flex flex-col">
          <label className="text-sm text-slate-400 mb-2">Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow w-full bg-slate-800 border border-slate-700 rounded-md p-4 text-slate-200 font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
            placeholder='{"key": "value"}'
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-slate-400 mb-2">Output</label>
          <div className={`flex-grow w-full bg-slate-900 border border-slate-700 rounded-md p-4 font-mono text-sm overflow-auto relative ${error ? 'border-red-500' : ''}`}>
             {error ? (
                <div className="text-red-400">
                  <p className="font-bold">Invalid JSON:</p>
                  <p className="mt-1">{error}</p>
                </div>
             ) : (
                <pre className="text-emerald-400 whitespace-pre-wrap">{output}</pre>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};