import React, { useState } from 'react';

export const Base64Converter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = (text: string, currentMode: 'encode' | 'decode') => {
    setInput(text);
    try {
      if (!text) {
        setOutput('');
        return;
      }
      if (currentMode === 'encode') {
        setOutput(btoa(text));
      } else {
        setOutput(atob(text));
      }
    } catch (e) {
      setOutput('Invalid input for decoding.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-white">Base64 Converter</h2>
      
      <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg w-fit">
        <button 
          onClick={() => { setMode('encode'); process(input, 'encode'); }}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${mode === 'encode' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
        >
          Encode
        </button>
        <button 
          onClick={() => { setMode('decode'); process(input, 'decode'); }}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${mode === 'decode' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
        >
          Decode
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-2">{mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}</label>
          <textarea
            value={input}
            onChange={(e) => process(e.target.value, mode)}
            className="w-full h-32 bg-slate-800 border border-slate-700 rounded-md p-3 text-slate-200 font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder={mode === 'encode' ? "Type text here..." : "Paste Base64 here..."}
          />
        </div>

        <div className="flex justify-center">
          <div className="bg-slate-700 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-2">Result</label>
          <div className="w-full h-32 bg-slate-900 border border-slate-700 rounded-md p-3 text-emerald-400 font-mono text-sm overflow-auto break-all">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};