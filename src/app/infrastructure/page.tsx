import PlatformShowcase from "@/components/sections/PlatformShowcase";
import PerformanceMetrics from "@/components/sections/PerformanceMetrics";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-16 text-center mb-10">
        <h1 className="font-mono text-5xl md:text-7xl text-foreground uppercase font-bold tracking-tighter">
          Neural <span className="text-mystic-mint text-opacity-80">Infrastructure</span>
        </h1>
        <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light mt-6">
          Bare-metal execution engines purpose-built for AI workflow orchestration. We stripped away the bloat so your agents can think faster.
        </p>
      </div>

      <PlatformShowcase />
      <PerformanceMetrics />
    </main>
  );
}
