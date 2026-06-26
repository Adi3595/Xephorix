export default function CareersSection() {
  const roles = [
    { title: "Senior Rust Systems Engineer", location: "Remote / Global", type: "Full-Time" },
    { title: "WASM Compiler Specialist", location: "Remote / Global", type: "Full-Time" },
    { title: "Cryptography Lead", location: "Remote / Global", type: "Full-Time" },
    { title: "Edge Infrastructure Architect", location: "Remote / Global", type: "Full-Time" }
  ];

  return (
    <section id="careers" className="w-full py-32 px-4 md:px-16 bg-oceanic-noir relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-mono text-4xl md:text-6xl text-foreground uppercase font-bold tracking-tighter mb-4">
              Open <span className="text-mystic-mint">Roles</span>
            </h2>
            <p className="font-sans text-xl text-foreground/50 max-w-xl font-light">
              We are actively recruiting elite systems engineers to help us rewrite the global compute layer.
            </p>
          </div>
          <a href="/careers" className="border border-foreground/10 px-6 py-3 font-mono text-[10px] text-foreground uppercase tracking-widest hover:bg-foreground/5 transition-colors whitespace-nowrap">
            View All Openings
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <div key={i} className="border border-white/10 bg-background/50 p-8 flex flex-col justify-between group hover:border-mystic-mint/30 transition-colors cursor-pointer">
              <div className="mb-8">
                <h3 className="font-mono text-xl text-foreground uppercase font-bold group-hover:text-mystic-mint transition-colors mb-2">
                  {role.title}
                </h3>
                <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest flex gap-4">
                  <span>{role.location}</span>
                  <span className="text-mystic-mint/50">{role.type}</span>
                </p>
              </div>
              <div className="flex justify-end">
                <span className="material-symbols-outlined text-foreground/30 group-hover:text-mystic-mint group-hover:translate-x-2 transition-all">
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
