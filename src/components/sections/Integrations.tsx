export default function Integrations() {
  const partners = [
    { name: "AWS", logo: "cloud", color: "group-hover:text-[#FF9900]" },
    { name: "Google Cloud", logo: "cloud_sync", color: "group-hover:text-[#4285F4]" },
    { name: "Vercel", logo: "change_history", color: "group-hover:text-white" },
    { name: "Cloudflare", logo: "filter_drama", color: "group-hover:text-[#F38020]" },
    { name: "Datadog", logo: "monitoring", color: "group-hover:text-[#632CA6]" },
    { name: "Snowflake", logo: "ac_unit", color: "group-hover:text-[#29B5E8]" }
  ];

  return (
    <section className="w-full py-32 px-4 md:px-16 bg-background relative border-y border-white/[0.05] overflow-hidden">
      {/* Background interaction mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-4">
            Seamless <span className="text-foreground/40">Integrations</span>
          </h2>
          <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            Deploy your autonomous logic directly into your existing infrastructure stack with zero friction.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <div key={i} className="relative border border-white/10 p-8 flex flex-col items-center justify-center bg-oceanic-noir/30 hover:bg-oceanic-noir hover:scale-105 hover:z-20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group cursor-pointer h-32 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className={`material-symbols-outlined text-4xl text-foreground/30 group-hover:-translate-y-2 transition-all duration-300 ${p.color} mb-3 relative z-10`}>
                {p.logo}
              </span>
              <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest group-hover:text-foreground transition-colors text-center relative z-10">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
