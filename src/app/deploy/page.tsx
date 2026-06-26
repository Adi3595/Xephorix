"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function DeployPage() {
  const [terminalText, setTerminalText] = useState("");
  const [stage, setStage] = useState(0);
  
  const initSequence = [
    "INITIALIZING SECURE CONNECTION...",
    "VERIFYING HANDSHAKE PROTOCOL...",
    "ACCESS GRANTED.",
    "AWAITING CREDENTIALS."
  ];

  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < initSequence.length) {
        setTerminalText(prev => prev + (prev ? "\n" : "") + "> " + initSequence[currentLine]);
        currentLine++;
      } else {
        setStage(1);
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 brutalist-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forsythia/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-lg border border-white/10 bg-oceanic-noir/80 backdrop-blur-xl relative z-10 shadow-2xl">
        {/* Terminal Header */}
        <div className="h-10 border-b border-white/10 flex items-center justify-between px-4 bg-background">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 bg-white/20" />
            <div className="w-2.5 h-2.5 bg-white/20" />
            <div className="w-2.5 h-2.5 bg-white/20" />
          </div>
          <div className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
            NODE_AUTH_TERMINAL
          </div>
        </div>
        
        <div className="p-8">
          {/* Terminal Output */}
          <div className="font-mono text-[12px] text-foreground/60 whitespace-pre-line h-24 mb-8 leading-relaxed">
            {terminalText}
            {stage === 0 && <span className="inline-block w-2 h-3 bg-forsythia animate-pulse ml-1 align-middle" />}
          </div>

          {/* Login Form */}
          <form className={`space-y-6 transition-opacity duration-1000 ${stage === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest block">Access Identifier</label>
              <input 
                type="text" 
                className="w-full bg-background border border-white/10 px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-forsythia/50 transition-colors"
                placeholder="root@mesh"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest block">Neural Key</label>
              <input 
                type="password" 
                className="w-full bg-background border border-white/10 px-4 py-3 font-mono text-sm text-forsythia focus:outline-none focus:border-forsythia/50 transition-colors"
                placeholder="••••••••••••"
              />
            </div>
            <div className="pt-4">
              <button className="w-full bg-foreground text-background font-mono text-[12px] uppercase font-bold tracking-[0.2em] py-4 hover:bg-forsythia transition-colors">
                INITIALIZE SESSION
              </button>
            </div>
          </form>
          
          <div className={`mt-8 text-center transition-opacity duration-1000 delay-500 ${stage === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="font-mono text-[10px] text-foreground/40 hover:text-foreground transition-colors uppercase tracking-widest border-b border-transparent hover:border-foreground pb-1">
              Abort_Connection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
