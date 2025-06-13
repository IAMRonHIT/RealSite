import React from 'react';

export const TerminalFooter: React.FC = () => {
  return (
    <div className="h-6 bg-[#1E2432]/90 backdrop-blur-xl border-t border-[#30363D] flex items-center px-4">
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0FA0CE]"></div>
          <span>Python 3.9.0</span>
        </div>
        <div>UTF-8</div>
        <div>LF</div>
      </div>
    </div>
  );
};
