export default function Architecture() {
  return (
    <section className="w-full py-32 px-4 md:px-16 bg-oceanic-noir/50 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="font-mono text-3xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-4">
            System <span className="text-forsythia">Architecture</span>
          </h2>
          <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light">
            A comprehensive breakdown of the Xephorix orchestration stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Layer 1 */}
          <div className="border border-white/10 bg-background p-8 relative overflow-hidden group hover:border-forsythia/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20">L_01</div>
            <h3 className="font-mono text-xl text-foreground font-bold mb-4 uppercase">Control Plane</h3>
            <ul className="space-y-4 font-sans text-sm text-foreground/60 font-light">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-forsythia rounded-full"></span>
                Global Traffic Routing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-forsythia rounded-full"></span>
                Cryptographic Key Exchange
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-forsythia rounded-full"></span>
                State Synchronization via Raft
              </li>
            </ul>
          </div>

          {/* Layer 2 */}
          <div className="border border-white/10 bg-background p-8 relative overflow-hidden group hover:border-mystic-mint/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20">L_02</div>
            <h3 className="font-mono text-xl text-foreground font-bold mb-4 uppercase">Execution Engine</h3>
            <ul className="space-y-4 font-sans text-sm text-foreground/60 font-light">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-mystic-mint rounded-full"></span>
                WASM Neural Runtime
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-mystic-mint rounded-full"></span>
                Zero-Copy Memory Access
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-mystic-mint rounded-full"></span>
                Hardware Acceleration (GPU/TPU)
              </li>
            </ul>
          </div>

          {/* Layer 3 */}
          <div className="border border-white/10 bg-background p-8 relative overflow-hidden group hover:border-white/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20">L_03</div>
            <h3 className="font-mono text-xl text-foreground font-bold mb-4 uppercase">Edge Nodes</h3>
            <ul className="space-y-4 font-sans text-sm text-foreground/60 font-light">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                Bare-Metal Provisioning
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                Local SSD Caching
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                Air-Gapped Isolation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
