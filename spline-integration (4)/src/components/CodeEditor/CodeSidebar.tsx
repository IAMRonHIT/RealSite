import React from 'react';

export const CodeSidebar: React.FC = () => {
  return (
    <div className="w-12 bg-[#1E2432]/80 backdrop-blur-xl border-r border-[#30363D] py-4">
      <div className="flex flex-col items-center gap-4">
        {[
          ['file', 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'],
          ['search', 'M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'],
          ['settings', 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z']
        ].map(([name, path], index) => (
          <div key={index} className={`w-6 h-6 flex items-center justify-center ${index === 0 ? 'text-[#0FA0CE]' : 'text-gray-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d={path}></path>
              {name === 'search' && <circle cx="11" cy="11" r="8"></circle>}
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
