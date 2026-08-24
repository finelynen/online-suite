export default function Music() {
  const creditsList = [
    { track: "Visions in Dark", artist: "Self-Produced", credit: "Songwriting, Vocal tracking, Mixing", year: "2026" },
    { track: "Velocity", artist: "External Client", credit: "Stereo Mastering (Loudness Optimization)", year: "2026" },
    { track: "Chamber Echoes", artist: "Cinematic Film Score", credit: "Surround Mix, Room Acoustics Engineering", year: "2025" },
    { track: "Static Blue", artist: "Independent Artist", credit: "Vocal Tuning, Multi-track Mixing", year: "2025" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Sonic Discography</h2>
        <h1 className="text-3xl font-bold tracking-tight text-white">ENGINEERING & MUSIC</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side: Audio Player Target */}
        <div className="lg:col-span-1">
          <div className="w-full bg-neutral-900 rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between min-h-[350px]">
            <div>
              <h3 className="text-sm font-bold text-white mb-2">Showreel Highlights</h3>
              <p className="text-xs text-neutral-400 font-light mb-6">Stream selected final master references directly below.</p>
            </div>
            {/* Audio Waveform Placement Block */}
            <div className="w-full h-44 bg-neutral-950 rounded-xl border border-neutral-900 flex flex-col items-center justify-center p-4 text-center">
              <svg className="w-8 h-8 text-neutral-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase">[ HTML5 Audio player or SoundCloud Embed ]</span>
            </div>
          </div>
        </div>

        {/* Right Side: Engineering Technical Log */}
        <div className="lg:col-span-2">
          <h3 className="text-xs tracking-widest uppercase font-bold text-neutral-400 mb-6">Technical Studio Credits</h3>
          <div className="divide-y divide-neutral-900 border-y border-neutral-900">
            {creditsList.map((item, i) => (
              <div key={i} className="py-5 flex items-center justify-between group hover:bg-neutral-900/20 px-2 transition-colors">
                <div>
                  <h4 className="text-md font-semibold text-white">{item.track}</h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">{item.artist} — <span className="text-neutral-500">{item.credit}</span></p>
                </div>
                <div className="text-right text-xs text-neutral-500 tracking-wider">
                  <div>{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
