export default function ApiResourcesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h1 className="font-mono text-5xl md:text-7xl text-foreground uppercase font-bold tracking-tighter mb-6">
          API <span className="text-forsythia">Resources</span>
        </h1>
        <p className="font-sans text-xl text-foreground/50 max-w-2xl mx-auto font-light mb-16">
          Direct endpoints for programmatic orchestration.
        </p>
        <div className="border border-white/10 p-12 bg-oceanic-noir/50 text-left max-w-3xl mx-auto">
          <p className="font-mono text-sm text-foreground/60">
            [SYS_MESSAGE] Interactive Swagger UI and GraphQL playgrounds are currently compiling. Please authenticate via the CLI to access your personal API gateway.
          </p>
        </div>
      </div>
    </main>
  );
}
