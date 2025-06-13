import React from 'react';

interface TerminalContentProps {
  terminalOutputRef: React.RefObject<HTMLDivElement>;
  hasStarted: boolean;
  visibleLines: number;
  terminalLines: string[];
}

export const TerminalContent: React.FC<TerminalContentProps> = ({
  terminalOutputRef,
  hasStarted,
  visibleLines,
  terminalLines
}) => {
  return (
    <div 
      ref={terminalOutputRef}
      className="p-4 font-mono text-sm overflow-auto h-[calc(100%-2.5rem)] terminalScroll"
    >
      <div className="flex flex-col gap-1">
        {hasStarted && (
          <>
            <div className="text-[#0FA0CE] command-type cursor-blink"></div>
            <div className="text-gray-400 terminal-text">
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <div key={index} className="mb-1">{line}</div>
              ))}
            </div>
            {visibleLines >= terminalLines.length && (
              <div className="flex flex-col items-center gap-2">
                <pre className="text-[#33C3F0] text-center whitespace-pre font-bold">
{`
██████╗  ██████╗ ███╗   ██╗     █████╗ ██╗
██╔══██╗██╔═══██╗████╗  ██║    ██╔══██╗██║
██████╔╝██║   ██║██╔██╗ ██║    ███████║██║
██╔══██╗██║   ██║██║╚██╗██║    ██╔══██║██║
██║  ██║╚██████╔╝██║ ╚████║    ██║  ██║██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝
`}
                </pre>
                <pre className="text-[#0FA0CE] text-center whitespace-pre">
{`
     ___     ___
    |[_]|   |[_]|
    |:::|-  |:::|
    |:::| - |:::|
    '---'   '---'

    < 01001 >
   _________
  |         |
  | []   [] |
  |  |||||  |
  |_________|
`}
                </pre>
                <div className="text-[#33C3F0] text-lg font-bold mt-2">Ron will see you now</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
