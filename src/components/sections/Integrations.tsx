export default function Integrations() {
  const partners = [
    { name: "AWS", logo: "cloud" },
    { name: "Google Cloud", logo: "cloud_sync" },
    { name: "Vercel", logo: "change_history" },
    { name: "Cloudflare", logo: "filter_drama" },
    { name: "Datadog", logo: "monitoring" },
    { name: "Snowflake", logo: "ac_unit" }
  ];

  return (
    <section className="w-full py-32 px-4 md:px-16 bg-background relative border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-4">
            Seamless <span className="text-foreground/40">Integrations</span>
          </h2>
          <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            Deploy your autonomous logic directly into your existing infrastructure stack.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <div key={i} className="border border-white/10 p-8 flex flex-col items-center justify-center bg-oceanic-noir/10 hover:bg-oceanic-noir/40 hover:border-white/30 transition-all group cursor-pointer h-32">
              <span className="material-symbols-outlined text-3xl text-foreground/30 group-hover:text-foreground mb-3 transition-colors">
                {p.logo}
              </span>
              <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest group-hover:text-foreground transition-colors text-center">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
