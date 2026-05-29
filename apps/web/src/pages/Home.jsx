import { Link } from "react-router-dom";

export default function Home() {
  return (
    // Replaced hardcoded constraints with #center alignment structure from App.css
    <div id="center" className="w-full px-4 py-12 md:py-20 flex flex-col justify-center">
      
      {/* Intro Hero Area */}
      <div className="w-full max-w-4xl text-center md:text-left mb-16">
        {/* Fixed massive overflow by switching to layout-driven fluid clamp sizing */}
        <h1 
          className="tracking-tight font-medium mb-6 leading-none block break-words"
          style={{ 
            fontSize: 'clamp(2rem, 5.5vw, 4.25rem)', 
            color: 'var(--text-h)',
            lineHeight: '1.1'
          }}
        >
          ARTIST <span className="opacity-30">•</span>{' '}
          PRODUCER <span className="opacity-30">•</span>{' '}
          ENGINEER <span className="opacity-30">•</span>{' '}
          MODEL <span className="opacity-30">•</span>{' '}
          ACTOR
        </h1>
        
        <p 
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-80"
          style={{ color: 'var(--text)' }}
        >
          Operating seamlessly across audio engineering, record production, dramatic performance, and high-fashion modeling.
        </p>
      </div>

      {/* Dynamic Navigation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        
        {/* Card 1 */}
        <Link 
          to="/portfolio" 
          style={{ backgroundColor: 'var(--social-bg)', borderColor: 'var(--border)' }}
          className="group block relative overflow-hidden rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
        >
          <div 
            style={{ color: 'var(--text-h)' }}
            className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-bold select-none"
          >
            01
          </div>
          <h3 style={{ color: 'var(--text-h)' }} className="text-xl font-semibold mb-2">
            Visual & Stage
          </h3>
          <p style={{ color: 'var(--text)' }} className="text-sm mb-8 leading-relaxed">
            Modeling editorial layouts, lookbooks, theatrical casting reels, and commercial headshots.
          </p>
          <span style={{ color: 'var(--accent)' }} className="text-xs tracking-widest uppercase font-semibold group-hover:underline">
            Explore Portfolio →
          </span>
        </Link>

        {/* Card 2 */}
        <Link 
          to="/music" 
          style={{ backgroundColor: 'var(--social-bg)', borderColor: 'var(--border)' }}
          className="group block relative overflow-hidden rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
        >
          <div 
            style={{ color: 'var(--text-h)' }}
            className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-bold select-none"
          >
            02
          </div>
          <h3 style={{ color: 'var(--text-h)' }} className="text-xl font-semibold mb-2">
            Music & Releases
          </h3>
          <p style={{ color: 'var(--text)' }} className="text-sm mb-8 leading-relaxed">
            Original artistry, songwriting, commercial beat catalogs, and streaming platform discography.
          </p>
          <span style={{ color: 'var(--accent)' }} className="text-xs tracking-widest uppercase font-semibold group-hover:underline">
            Listen Tracks →
          </span>
        </Link>

        {/* Card 3 */}
        <Link 
          to="/about" 
          style={{ backgroundColor: 'var(--social-bg)', borderColor: 'var(--border)' }}
          className="group block relative overflow-hidden rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
        >
          <div 
            style={{ color: 'var(--text-h)' }}
            className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-bold select-none"
          >
            03
          </div>
          <h3 style={{ color: 'var(--text-h)' }} className="text-xl font-semibold mb-2">
            Audio Engineering
          </h3>
          <p style={{ color: 'var(--text)' }} className="text-sm mb-8 leading-relaxed">
            Recording layouts, precision vocal chains, multi-track mixing, and master delivery specs.
          </p>
          <span style={{ color: 'var(--accent)' }} className="text-xs tracking-widest uppercase font-semibold group-hover:underline">
            Studio Specs →
          </span>
        </Link>

      </div>
    </div>
  );
}
