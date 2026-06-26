export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h1 className="font-mono text-5xl md:text-7xl text-foreground uppercase font-bold tracking-tighter mb-6">
          Join <span className="text-foreground/40">Xephorix</span>
        </h1>
        <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light mb-16">
          We are recruiting elite systems engineers and low-level optimization experts to help us rewrite the global compute layer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          {['Senior Rust Systems Engineer', 'WASM Compiler Specialist', 'Cryptography Lead', 'Edge Infrastructure Architect'].map(role => (
            <div key={role} className="border border-white/10 p-8 bg-oceanic-noir/20 hover:border-forsythia/30 transition-colors cursor-pointer group">
              <h3 className="font-mono text-lg text-foreground uppercase font-bold mb-2 group-hover:text-forsythia transition-colors">{role}</h3>
              <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Remote / Global</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
