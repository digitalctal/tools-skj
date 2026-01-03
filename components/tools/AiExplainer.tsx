import React, { useState } from 'react';
import { explainCode } from '../../services/geminiService';
import { IconSparkles } from '../icons';

export const AiExplainer: React.FC = () => {
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setExplanation('');
    try {
      const result = await explainCode(code);
      setExplanation(result);
    } catch (error) {
      setExplanation("Error connecting to AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between items-start">
         <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <IconSparkles className="text-indigo-400" />
              AI Code Explainer
            </h2>
            <p className="text-slate-400 text-sm mt-1">Paste a snippet and let Gemini break it down for you.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        <div className="flex flex-col space-y-2">
           <label className="text-sm font-medium text-slate-300">Source Code</label>
           <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-grow w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-slate-200 font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            placeholder="// Paste complex logic here..."
          />
          <button
            onClick={handleExplain}
            disabled={loading || !code.trim()}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 transition-all"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <IconSparkles className="w-5 h-5" />
                Explain Code
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col space-y-2">
           <label className="text-sm font-medium text-slate-300">Explanation</label>
           <div className="flex-grow bg-slate-900 border border-slate-700 rounded-lg p-6 overflow-auto">
             {explanation ? (
               <div className="prose prose-invert prose-sm max-w-none">
                 <p className="whitespace-pre-wrap leading-relaxed text-slate-300">{explanation}</p>
               </div>
             ) : (
               <div className="h-full flex items-center justify-center text-slate-600 italic">
                 AI analysis will appear here...
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};