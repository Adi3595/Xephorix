export default function DocsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-16 flex flex-col items-center bg-oceanic-noir">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 relative z-10">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 border-r border-white/10 pr-8">
          <h3 className="font-mono text-sm text-foreground/50 uppercase tracking-widest font-bold mb-6">Documentation</h3>
          <ul className="space-y-4 font-mono text-[12px] uppercase">
            <li><a href="#" className="text-forsythia font-bold block border-l-2 border-forsythia pl-4 -ml-[2px]">Quickstart</a></li>
            <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors block pl-4">Architecture</a></li>
            <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors block pl-4">WASM Compilation</a></li>
            <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors block pl-4">Node Deployment</a></li>
            <li className="pt-6"><span className="text-foreground/30 font-bold">API Reference</span></li>
            <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors block pl-4">Authentication</a></li>
            <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors block pl-4">Workflows</a></li>
            <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors block pl-4">Telemetry</a></li>
          </ul>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-12">
          <div>
            <h1 className="font-mono text-4xl md:text-5xl text-foreground font-bold tracking-tighter mb-4">Quickstart</h1>
            <p className="font-sans text-lg text-foreground/60 font-light leading-relaxed mb-8 max-w-3xl">
              Initialize your first autonomous cluster in under 60 seconds. The Xephorix CLI automates the entire deployment mesh.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-mono text-xl text-foreground uppercase tracking-widest">1. Install the CLI</h2>
            <div className="bg-background border border-white/10 p-6 font-mono text-sm text-forsythia shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-forsythia/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              $ curl -sSL https://get.xephorix.ai | bash
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-mono text-xl text-foreground uppercase tracking-widest">2. Authenticate</h2>
            <div className="bg-background border border-white/10 p-6 font-mono text-sm text-forsythia shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-forsythia/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              $ xephorix login --api-key=&lt;YOUR_TOKEN&gt;
            </div>
            <p className="font-sans text-foreground/50 font-light text-sm max-w-2xl">
              Generate an API token from your deployment console. Ensure this token is stored securely as it provides full administrative access to your node mesh.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="font-mono text-xl text-foreground uppercase tracking-widest">3. Deploy Node</h2>
            <div className="bg-background border border-white/10 p-6 font-mono text-sm shadow-2xl relative overflow-hidden group space-y-2">
              <div className="absolute inset-0 bg-forsythia/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-forsythia">$ xephorix deploy --region=global</p>
              <p className="text-foreground/40">&gt;&gt; Provisioning edge environments...</p>
              <p className="text-foreground/40">&gt;&gt; Allocating WASM runtime...</p>
              <p className="text-mystic-mint/80">&gt;&gt; SUCCESS: Node active at wss://edge-1.xephorix.ai</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
