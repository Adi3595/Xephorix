export default function LegalPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-16 flex flex-col items-center">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="font-mono text-4xl md:text-5xl text-foreground uppercase font-bold tracking-tighter mb-12">
          Legal & <span className="text-foreground/40">Compliance</span>
        </h1>
        <div className="space-y-8 font-sans text-foreground/60 font-light leading-relaxed">
          <p>
            By accessing or using the Xephorix orchestration network, you agree to be bound by these strict usage terms. Xephorix provides bare-metal execution environments and assumes no liability for the autonomous logic processed on its edge nodes.
          </p>
          <h2 className="font-mono text-xl text-foreground uppercase tracking-widest mt-8 mb-4">1. Data Privacy & Zero-Trust</h2>
          <p>
            Our architecture guarantees zero host-OS visibility into your neural weights. Data telemetry collected is strictly limited to network performance metrics (latency, bandwidth, hardware utilization). We do not, and cryptographically cannot, inspect customer logic.
          </p>
          <h2 className="font-mono text-xl text-foreground uppercase tracking-widest mt-8 mb-4">2. SLA Guarantees</h2>
          <p>
            Enterprise contracts are backed by a 99.9999% uptime SLA. Any network degradation resulting in latency exceeding 5.0ms globally will result in automated compute credit refunds.
          </p>
        </div>
      </div>
    </main>
  );
}
