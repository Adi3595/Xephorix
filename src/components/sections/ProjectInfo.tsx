export default function ProjectInfo() {
  return (
    <section className="w-full py-32 px-4 md:px-16 bg-oceanic-noir relative border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-mono text-3xl md:text-5xl text-foreground font-bold uppercase tracking-tighter mb-8 leading-[1.1]">
              The Core <br /> <span className="text-forsythia">Philosophy</span>
            </h2>
            <p className="font-sans text-lg text-foreground/60 font-light leading-relaxed mb-6">
              Xephorix was born from a singular realization: modern AI infrastructure is heavily bloated. The existing orchestration tools rely on fragile containerization, convoluted YAML configurations, and extreme latency overheads that render true autonomous real-time intelligence impossible.
            </p>
            <p className="font-sans text-lg text-foreground/60 font-light leading-relaxed">
              We discarded the legacy stack. By compiling neural pathways directly into WebAssembly and executing them on a cryptographically secured global mesh, we achieved sub-millisecond execution. Xephorix isn't just an orchestration platform—it's a fundamental rewrite of how machines think at scale.
            </p>
          </div>
          <div className="relative border border-white/10 p-10 bg-background/50 flex flex-col justify-center">
            <div className="absolute inset-0 brutalist-grid opacity-10"></div>
            <div className="relative z-10 space-y-8">
              <div className="border-l-2 border-forsythia pl-6">
                <p className="font-mono text-sm uppercase text-foreground/40 tracking-widest mb-2">Total Processing Overhead</p>
                <p className="font-mono text-4xl text-foreground font-bold">0.8ms</p>
              </div>
              <div className="border-l-2 border-mystic-mint pl-6">
                <p className="font-mono text-sm uppercase text-foreground/40 tracking-widest mb-2">Global Edge Nodes</p>
                <p className="font-mono text-4xl text-foreground font-bold">14,204+</p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <p className="font-mono text-sm uppercase text-foreground/40 tracking-widest mb-2">Uptime Reliability</p>
                <p className="font-mono text-4xl text-foreground font-bold">99.9999%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
