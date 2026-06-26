export default function ReviewsGrid() {
  const reviews = [
    { text: "Xephorix's WASM engine cuts our cloud orchestration costs in half. We've completely ripped out Kubernetes.", author: "S. Tanaka", co: "NeuroLogix" },
    { text: "The brutalist API is beautiful. No bloated SDKs, just pure, fast endpoints. My team shipped the integration in 2 days.", author: "J. Mercer", co: "QuantStack" },
    { text: "Sub-millisecond latency across the Atlantic. It honestly feels like magic, but it's just brilliant engineering.", author: "R. Singh", co: "Edge Velocity" },
    { text: "Zero-trust architecture that actually works without slowing down the network. Xephorix is the future of enterprise AI.", author: "L. Chen", co: "Apex Security" },
    { text: "We moved our entire LLM inference router to their mesh. Uptime has been flawless.", author: "M. Kovac", co: "DataSynth" },
    { text: "Finally, a platform built by engineers, for engineers. The documentation is minimal but tells you exactly what you need.", author: "D. Ross", co: "Vector Labs" },
  ];

  return (
    <section className="w-full py-32 px-4 md:px-16 bg-background relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-16 text-center">
          Industry <span className="text-foreground/40">Consensus</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="group border border-white/10 p-8 bg-oceanic-noir/10 hover:bg-oceanic-noir/40 hover:border-forsythia/30 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:shadow-[0_10px_30px_rgba(255,200,1,0.05)]">
              <p className="font-sans text-foreground/70 font-light leading-relaxed italic mb-8 group-hover:text-foreground transition-colors duration-300">
                "{r.text}"
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <p className="font-mono text-sm text-forsythia uppercase font-bold group-hover:text-mystic-mint transition-colors duration-300">{r.author}</p>
                  <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest group-hover:text-foreground/80 transition-colors duration-300">{r.co}</p>
                </div>
                <span className="material-symbols-outlined text-white/10 group-hover:text-forsythia/50 transition-colors duration-300 transform group-hover:translate-x-2">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
