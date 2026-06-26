import BentoFeatureGrid from "@/components/sections/BentoFeatureGrid";

export default function NetworkPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20 space-y-6">
          <h1 className="font-mono text-5xl md:text-7xl text-foreground uppercase font-bold tracking-tighter">
            Global <span className="text-forsythia">Node Mesh</span>
          </h1>
          <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            A distributed network of hyper-optimized WASM instances ensuring zero-latency autonomous logic processing worldwide.
          </p>
        </div>

        {/* Global Map Placeholder (Brutalist style) */}
        <div className="w-full aspect-video md:aspect-[21/9] border border-white/10 bg-oceanic-noir/50 relative overflow-hidden mb-20 flex items-center justify-center group">
          <div className="absolute inset-0 brutalist-grid opacity-20" />
          <div className="absolute w-full h-[1px] bg-forsythia/30 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,200,1,0.5)]" />
          <div className="absolute h-full w-[1px] bg-forsythia/30 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,200,1,0.5)]" />
          
          {/* Node points */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-forsythia rounded-full animate-pulse shadow-[0_0_15px_rgba(255,200,1,1)]"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}

          <div className="relative z-10 font-mono text-[10px] text-forsythia uppercase tracking-[0.2em] bg-background/80 px-4 py-2 border border-forsythia/20 backdrop-blur-md">
            LIVE_NODE_TELEMETRY [ACTIVE]
          </div>
        </div>

      </div>
      
      {/* Re-use Bento Grid for core capabilities */}
      <BentoFeatureGrid />
    </main>
  );
}
