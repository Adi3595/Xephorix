export default function UseCases() {
  const cases = [
    {
      industry: "High-Frequency Trading",
      detail: "Process market signals and execute trades in sub-millisecond windows across distributed global exchanges."
    },
    {
      industry: "Defense & Aerospace",
      detail: "Air-gapped autonomous telemetry processing for low-orbit satellites and drone swarms."
    },
    {
      industry: "Biotech & Genomics",
      detail: "Massive parallelization of protein-folding algorithms distributed across idle edge nodes."
    },
    {
      industry: "Autonomous Logistics",
      detail: "Real-time fleet orchestration responding instantly to traffic, weather, and supply chain fluctuations."
    }
  ];

  return (
    <section className="w-full py-32 px-4 md:px-16 bg-oceanic-noir/50 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-4">
          <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter">
            Target <span className="text-mystic-mint">Vectors</span>
          </h2>
          <span className="font-mono text-sm text-foreground/40 uppercase tracking-widest hidden md:block">
            Production Environments
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="font-mono text-2xl text-white/10 font-bold group-hover:text-mystic-mint transition-colors">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-mono text-xl text-foreground uppercase tracking-widest font-bold mb-2">
                  {c.industry}
                </h3>
                <p className="font-sans text-foreground/50 font-light leading-relaxed">
                  {c.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
