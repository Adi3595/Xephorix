"use client";

export default function ContactUs() {
  return (
    <section id="contact" className="w-full py-32 px-4 md:px-16 bg-background relative border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <h2 className="font-mono text-4xl md:text-6xl text-foreground uppercase font-bold tracking-tighter mb-6">
            Initiate <br /><span className="text-forsythia">Handshake</span>
          </h2>
          <p className="font-sans text-lg text-foreground/50 font-light leading-relaxed mb-8">
            Deploying neural infrastructure at scale requires precision. Connect with our engineering team to discuss enterprise SLAs, custom integrations, or air-gapped deployments.
          </p>
          <div className="space-y-6">
            <div>
              <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Direct Line</p>
              <a href="mailto:admin@xephorix.ai" className="font-mono text-lg text-foreground hover:text-forsythia transition-colors">admin@xephorix.ai</a>
            </div>
            <div>
              <p className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Global Headquarters</p>
              <p className="font-mono text-sm text-foreground/80">Seattle, WA<br />United States</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 border border-white/10 bg-oceanic-noir/20 p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Transmission Identity</label>
                <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 font-mono text-sm text-foreground focus:border-forsythia/50 outline-none transition-colors placeholder:text-foreground/20" placeholder="NAME / ALIAS" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Return Address</label>
                <input type="email" className="w-full bg-background border border-white/10 px-4 py-3 font-mono text-sm text-foreground focus:border-forsythia/50 outline-none transition-colors placeholder:text-foreground/20" placeholder="EMAIL" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">Payload</label>
              <textarea rows={5} className="w-full bg-background border border-white/10 px-4 py-3 font-mono text-sm text-foreground focus:border-forsythia/50 outline-none transition-colors placeholder:text-foreground/20 resize-none" placeholder="DESCRIBE YOUR INFRASTRUCTURE NEEDS..."></textarea>
            </div>
            <button className="bg-foreground text-background font-mono text-[11px] px-8 py-4 hover:bg-forsythia transition-colors uppercase tracking-[0.15em] font-medium w-full md:w-auto">
              Transmit Data
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
