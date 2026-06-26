import Image from "next/image";

export default function BentoFeatureGrid() {
  return (
    <section id="infrastructure" className="w-full py-32 px-4 md:px-16 bg-background relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-4">
            Neural <span className="text-forsythia">Infrastructure</span>
          </h2>
          <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            Built for extreme workloads. No containers, no cold starts, no compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[400px]">
          
          {/* Large Feature - Left */}
          <div className="md:col-span-2 border border-white/10 bg-oceanic-noir/20 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-forsythia/30 transition-colors">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <Image src="/images/neural_nodes.png" alt="Neural Nodes" fill className="object-cover" />
            </div>
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">F_01</div>
            <div className="mb-12 relative z-10">
              <span className="material-symbols-outlined text-4xl text-forsythia mb-4">account_tree</span>
              <h3 className="font-mono text-2xl text-foreground font-bold mb-2 uppercase tracking-tight">Zero-Latency Routing</h3>
              <p className="font-sans text-foreground/60 font-light max-w-md">Our proprietary orchestration engine compiles logic directly into WebAssembly, skipping traditional OS scheduling for sub-millisecond execution.</p>
            </div>
          </div>

          {/* Tall Feature - Right */}
          <div className="md:row-span-2 border border-white/10 bg-background p-8 flex flex-col group overflow-hidden relative hover:border-mystic-mint/30 transition-colors">
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
              <Image src="/images/server_rack.png" alt="Server Rack" fill className="object-cover" />
            </div>
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">F_02</div>
            <div className="mt-auto relative z-10">
              <span className="material-symbols-outlined text-4xl text-mystic-mint mb-4">dns</span>
              <h3 className="font-mono text-xl text-foreground font-bold mb-2 uppercase tracking-tight">Bare-Metal Edge</h3>
              <p className="font-sans text-foreground/60 font-light text-sm">Deploy instantly to globally distributed air-gapped hardware clusters with automated cryptographic isolation.</p>
            </div>
          </div>

          {/* Small Feature - Bottom Left 1 */}
          <div className="border border-white/10 bg-oceanic-noir/10 p-8 group overflow-hidden relative hover:border-white/30 transition-colors">
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
              <Image src="/images/crypto_shield.png" alt="Crypto Shield" fill className="object-cover" />
            </div>
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">F_03</div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl text-foreground/50 mb-4 group-hover:text-foreground transition-colors">enhanced_encryption</span>
              <h3 className="font-mono text-lg text-foreground font-bold mb-2 uppercase tracking-tight">Zero-Trust Protocol</h3>
              <p className="font-sans text-foreground/50 font-light text-sm">Native homomorphic encryption at runtime.</p>
            </div>
          </div>

          {/* Small Feature - Bottom Left 2 */}
          <div className="border border-white/10 bg-oceanic-noir/10 p-8 relative overflow-hidden group hover:border-white/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">F_04</div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl text-foreground/50 mb-4 group-hover:text-foreground transition-colors">memory</span>
              <h3 className="font-mono text-lg text-foreground font-bold mb-2 uppercase tracking-tight">Quantum Ready</h3>
              <p className="font-sans text-foreground/50 font-light text-sm">Post-quantum key exchange algorithms integrated by default.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
