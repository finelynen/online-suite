import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col justify-center min-h-[80vh]">
      {/* Intro Hero Area */}
      <div className="max-w-4xl mb-20 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none bg-gradient-to-b from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          CREATIVE MULTI-HYPHENATE.
        </h1>
        <p className="text-md sm:text-xl text-neutral-400 leading-relaxed max-w-2xl font-light">
          Operating seamlessly across audio synthesis, dramatic arts, visual fashion, and software architecture.
        </p>
      </div>

      {/* Dynamic Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link to="/portfolio" className="group block relative overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/40 p-8 hover:border-neutral-700 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-black select-none">01</div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neutral-200">Visual & Stage</h3>
          <p className="text-sm text-neutral-400 mb-8 font-light">Modeling editorial layout galleries, lookbooks, acting showreels, and headshots.</p>
          <span className="text-xs tracking-widest uppercase font-semibold text-white group-hover:underline">Explore Portfolio →</span>
        </Link>

        {/* Card 2 */}
        <Link to="/music" className="group block relative overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/40 p-8 hover:border-neutral-700 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-black select-none">02</div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neutral-200">Sonic Production</h3>
          <p className="text-sm text-neutral-400 mb-8 font-light">Original compositions, beat architecture, records, mixing, and commercial production credits.</p>
          <span className="text-xs tracking-widest uppercase font-semibold text-white group-hover:underline">Listen Tracks →</span>
        </Link>

        {/* Card 3 */}
        <Link to="/about" className="group block relative overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/40 p-8 hover:border-neutral-700 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-black select-none">03</div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neutral-200">Engineering</h3>
          <p className="text-sm text-neutral-400 mb-8 font-light">Full-stack software deployment, tech infrastructure case studies, and application development.</p>
          <span className="text-xs tracking-widest uppercase font-semibold text-white group-hover:underline">View Systems →</span>
        </Link>
      </div>
    </div>
  );
}
