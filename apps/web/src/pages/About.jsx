export default function About() {
  const hardwareGear = ["Universal Audio Apollo X8p", "Neumann U87 Ai", "Tube-Tech CL 1B", "Empirical Labs Distressor", "Solid State Logic G-Comp"];
  const softwareSuites = ["Pro Tools Ultimate", "Logic Pro X", "FabFilter Pro Bundle", "Universal Audio UAD-2", "Soundtoys 5", "iZotope Ozone Advanced"];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">The Biography</h2>
        <h1 className="text-3xl font-bold tracking-tight text-white">ABOUT ME</h1>
      </div>

      {/* Profile Text Block */}
      <div className="prose prose-invert text-neutral-400 font-light space-y-6 text-base leading-relaxed">
        <p>
          I bridge visual presence with sonic precision. As an audio engineer, I shape raw tracking dynamics into pristine, commercially competitive records. As a fashion model and actor, I transform creative visions into striking, physical human narratives.
        </p>
        <p>
          Whether capturing clean acoustic takes in the booth, executing high-fashion editorial lookbooks, or mastering stereo masters for streaming DSPs, my work is defined by strict technical attention to detail.
        </p>
      </div>

      {/* Hardware & Software Specs */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-neutral-900">
        <div>
          <h3 className="text-xs tracking-widest uppercase font-bold text-white mb-6">Outboard & Mic Locker</h3>
          <div className="flex flex-wrap gap-2">
            {hardwareGear.map((gear) => (
              <span key={gear} className="px-3 py-1.5 bg-neutral-900 text-neutral-300 text-xs rounded-md border border-neutral-800">
                {gear}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase font-bold text-white mb-6">Digital Signal Processing (DSP)</h3>
          <div className="flex flex-wrap gap-2">
            {softwareSuites.map((tool) => (
              <span key={tool} className="px-3 py-1.5 bg-neutral-900 text-neutral-300 text-xs rounded-md border border-neutral-800">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
