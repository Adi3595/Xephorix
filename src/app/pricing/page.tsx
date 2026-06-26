import PricingMatrix from "@/components/sections/PricingMatrix";
import FinalCTA from "@/components/sections/FinalCTA";

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-16 text-center mb-10">
        <h1 className="font-mono text-5xl md:text-7xl text-foreground uppercase font-bold tracking-tighter">
          Transparent <span className="text-foreground/40">Pricing</span>
        </h1>
        <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light mt-6">
          Pay exclusively for the compute cycles your autonomous logic consumes. No seat licenses. No hidden orchestration fees.
        </p>
      </div>

      <PricingMatrix />
      <FinalCTA />
    </main>
  );
}
