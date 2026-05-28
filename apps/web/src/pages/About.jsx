export default function About() {
  const techSkills = ["JavaScript/TypeScript", "React / Next.js", "Node.js", "Python", "Docker", "AWS / Vercel"];
  const audioTools = ["Pro Tools", "Logic Pro X", "Ableton Live", "Analog Outboard Routing", "Waves / FabFilter"];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">The Biography</h2>
        <h1 className="text-3xl font-bold tracking-tight text-white">ABOUT ME</h1>
      </div>

      {/* Profile Text Block */}
      <div className="prose prose-invert text-neutral-400 font-light space-y-6 text-base leading-relaxed">
        <p>
          I operate deliberately inside unique cross-sections of industries. As an software systems engineer, I analyze 
          and deploy clean architectures. As a producer, fashion model, and actor, I convert raw creative thought into highly defined structural realities.
        </p>
        <p>
          This website serves as a unified command dashboard matching logic-based code paradigms with high-fashion and fluid audio environments.
        </p>
      </div>

      {/* Technical Skill / Proficiencies Metric Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-neutral-900">
        <div>
          <h3 className="text-xs tracking-widest uppercase font-bold text-white mb-6">Engineering Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techSkills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-neutral-900 text-neutral-300 text-xs rounded-md border border-neutral-800">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase font-bold text-white mb-6">Studio Systems</h3>
          <div className="flex flex-wrap gap-2">
            {audioTools.map((tool) => (
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
