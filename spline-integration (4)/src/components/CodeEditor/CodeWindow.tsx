import React from 'react';
import { CodeHeader } from './CodeHeader';
import { CodeSidebar } from './CodeSidebar';
import { FileExplorer } from './FileExplorer';
import { CodeEditor } from './CodeEditor';

export const CodeWindow: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0FA0CE]/20 via-[#33C3F0]/20 to-[#9b87f5]/20 opacity-20 blur-md group-hover:opacity-30 transition duration-500 rounded-lg"></div>
      
      <div className="glass-morphism-dark rounded-lg overflow-hidden relative">
        <CodeHeader />
        <div className="flex">
          <CodeSidebar />
          <FileExplorer />
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};
