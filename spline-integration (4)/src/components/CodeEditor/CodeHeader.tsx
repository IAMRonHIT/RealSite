import React from 'react';

export const CodeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#161B22]/90 border-b border-[#30363D]">
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex gap-2 ml-4">
          <div className="px-3 py-1 bg-[#1E2432] rounded-t text-sm text-[#0FA0CE] border-b-2 border-[#0FA0CE]">
            main.py
          </div>
          <div className="px-3 py-1 rounded text-sm text-gray-500">terminal</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-400">Python</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0FA0CE] animate-pulse"></div>
          <span className="text-sm text-gray-400">Connected</span>
        </div>
      </div>
    </div>
  );
};
