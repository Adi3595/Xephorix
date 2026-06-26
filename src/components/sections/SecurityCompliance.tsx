export default function SecurityCompliance() {
  return (
    <section className="w-full py-32 px-4 md:px-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-4">
            Zero-Trust <span className="text-foreground/30">Protocol</span>
          </h2>
          <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            Military-grade cryptographic isolation for every autonomous agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "lock",
              title: "Homomorphic Encryption",
              desc: "Compute directly on encrypted data without ever exposing the raw neural weights to the host node."
            },
            {
              icon: "verified_user",
              title: "SOC 2 Type II Compliant",
              desc: "Audited and verified infrastructure that meets the strictest enterprise data privacy standards."
            },
            {
              icon: "shield",
              title: "Air-Gapped Execution",
              desc: "WASM runtimes are completely sandboxed with zero host-OS visibility or network bleed."
            }
          ].map((item, i) => (
            <div key={i} className="border border-white/10 p-8 bg-oceanic-noir/20 hover:bg-oceanic-noir/50 transition-colors group">
              <span className="material-symbols-outlined text-4xl text-forsythia/80 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="font-mono text-lg uppercase text-foreground font-bold mb-3 tracking-wide">{item.title}</h3>
              <p className="font-sans text-foreground/50 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
