import React, { useEffect, useRef, useState } from 'react';
import { TerminalHeader } from './TerminalHeader';
import { TerminalContent } from './TerminalContent';
import { TerminalFooter } from './TerminalFooter';

export const TerminalWindow: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalOutputRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    "Initializing AI Core...",
    "[INFO] Loading neural networks...",
    "[INFO] Calibrating healthcare models...",
    "[INFO] Establishing secure connections...",
    "[INFO] Loading FHIR protocols...",
    "[INFO] Initializing HL7 interfaces...",
    "[INFO] Loading medical knowledge base...",
    "[INFO] Activating prior authorization systems...",
    "[INFO] Starting care coordination module...",
    "[INFO] All systems operational."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    const terminal = terminalOutputRef.current;
    if (!terminal) return;

    let lineIndex = 0;
    const showNextLine = () => {
      if (lineIndex < terminalLines.length) {
        setVisibleLines(prev => prev + 1);
        lineIndex++;
        
        terminal.scrollTo({
          top: terminal.scrollHeight,
          behavior: 'smooth'
        });
        
        setTimeout(showNextLine, 1200);
      }
    };

    setTimeout(showNextLine, 1500);
  }, [hasStarted, terminalLines.length]);

  useEffect(() => {
    const terminal = terminalOutputRef.current;
    if (!terminal || !hasStarted) return;

    terminal.scrollTo({
      top: terminal.scrollHeight,
      behavior: 'smooth'
    });
  }, [visibleLines, hasStarted]);

  return (
    <div ref={terminalRef} className="h-80 bg-[#1E2432]/90 backdrop-blur-xl border-t border-[#30363D]">
      <TerminalHeader />
      <TerminalContent 
        terminalOutputRef={terminalOutputRef}
        hasStarted={hasStarted}
        visibleLines={visibleLines}
        terminalLines={terminalLines}
      />
      <TerminalFooter />
    </div>
  );
};
