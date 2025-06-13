import React from 'react';

export const FileExplorer: React.FC = () => {
  return (
    <div className="w-64 bg-[#1E2432]/60 backdrop-blur-xl border-r border-[#30363D] py-4 hidden lg:block">
      <div className="px-4 mb-4">
        <div className="text-sm font-semibold text-gray-400 mb-2">EXPLORER</div>
        <div className="flex items-center gap-2 text-[#0FA0CE] mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-sm">ron-ai</span>
        </div>
        <div className="pl-6">
          <div className="flex items-center gap-2 text-white/70">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
            <span className="text-sm">main.py</span>
          </div>
        </div>
      </div>
    </div>
  );
};
