export default function PlatformShowcase() {
  return (
    <section id="infrastructure" className="w-full py-20 px-4 md:px-16 bg-oceanic-noir/10 border-y border-white/[0.05] relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-background border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 brutalist-grid opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-tr from-forsythia/5 via-transparent to-mystic-mint/5" />
            
            {/* Abstract UI Representation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 bg-background/50 backdrop-blur-md shadow-2xl flex flex-col">
              <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 p-6 relative overflow-hidden">
                <div className="w-full h-2 bg-white/5 mb-4 w-3/4" />
                <div className="w-full h-2 bg-white/5 mb-4 w-1/2" />
                <div className="w-full h-2 bg-white/5 mb-8 w-5/6" />
                
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-forsythia/10 border border-forsythia/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-forsythia text-xl">analytics</span>
                  </div>
                  <div className="flex-1 border border-white/5 bg-white/[0.02]" />
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mystic-mint/10 rounded-full blur-3xl group-hover:bg-mystic-mint/20 transition-colors duration-1000" />
              </div>
            </div>
          </div>
  
          {/* Content Side */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-3 font-mono text-[10px] text-foreground/50 uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-outlined text-[14px]">tune</span>
              Architecture Overview
            </div>
            
            <h2 className="font-mono text-3xl md:text-5xl text-foreground font-bold uppercase tracking-tighter mb-8 leading-[1.1]">
              Uncompromising<br />
              <span className="text-foreground/40">Performance</span>
            </h2>
            
            <p className="font-sans text-lg text-foreground/50 font-light mb-10 max-w-lg leading-relaxed">
              Xephorix is built on a proprietary low-latency rust backend, compiling autonomous agent logic directly to WebAssembly for execution speeds that border on the instantaneous.
            </p>
            
            <ul className="space-y-6 w-full">
              {[
                { title: "Sub-10ms Latency", desc: "Global edge routing ensures instantaneous logic execution." },
                { title: "WASM-Compiled Agents", desc: "Neural logic compiled to binary for minimal overhead." },
                { title: "Zero-Trust Mesh", desc: "Cryptographically verified inter-node communication." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 border-b border-white/5 pb-6">
                  <span className="font-mono text-forsythia">0{i+1}</span>
                  <div>
                    <h4 className="font-mono text-sm uppercase tracking-wider font-bold mb-1">{item.title}</h4>
                    <p className="font-sans text-sm text-foreground/40 font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
