export default function StatusPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12">
          <h1 className="font-mono text-4xl md:text-6xl text-foreground uppercase font-bold tracking-tighter">
            Network <span className="text-mystic-mint">Status</span>
          </h1>
          <div className="font-mono text-sm text-mystic-mint flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mystic-mint animate-pulse"></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
        <div className="space-y-4">
          {['Global Control Plane', 'US-East Edge Nodes', 'EU-Central Edge Nodes', 'APAC Routing Layer'].map(region => (
            <div key={region} className="border border-white/5 bg-oceanic-noir/30 p-6 flex justify-between items-center">
              <span className="font-mono text-foreground/80 uppercase tracking-widest">{region}</span>
              <span className="font-mono text-mystic-mint text-sm">100% UPTIME</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
