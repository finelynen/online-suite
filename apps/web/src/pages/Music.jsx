export default function Music() {
  const tracks = [
    { title: "Midnight Echoes", role: "Producer / Engineer", type: "Single", year: "2026" },
    { title: "Neon Skyline", role: "Vocalist / Composer", type: "EP Track", year: "2025" },
    { title: "Sub-Zero Baseline", role: "Mixing & Mastering", type: "Co-Prod", year: "2025" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Sonic Discography</h2>
        <h1 className="text-3xl font-bold tracking-tight text-white">MUSIC PRODUCTION</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side: Embedded Spotify / Soundcloud Streaming Player Widget */}
        <div className="lg:col-span-1">
          <div className="w-full bg-neutral-900 rounded-2xl p-4 border border-neutral-800 text-center min-h-[300px] flex flex-col justify-center items-center">
            <p className="text-sm text-neutral-400 mb-4 font-light">Embed your streaming platform widgets here</p>
            {/* Example Streaming Player placeholder block */}
            <div className="w-full h-40 bg-neutral-950 rounded-xl border border-neutral-900 flex items-center justify-center text-xs tracking-wider text-neutral-600 uppercase">
              [Spotify / SoundCloud Embed Frame]
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Production Track Credits Log */}
        <div className="lg:col-span-2">
          <h3 className="text-xs tracking-widest uppercase font-bold text-neutral-400 mb-6">Recent Audio Releases & Credits</h3>
          <div className="divide-y divide-neutral-900 border-y border-neutral-900">
            {tracks.map((track, i) => (
              <div key={i} className="py-5 flex items-center justify-between group hover:bg-neutral-900/20 px-2 transition-colors">
                <div>
                  <h4 className="text-md font-semibold text-white">{track.title}</h4>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">{track.role}</p>
                </div>
                <div className="text-right text-xs text-neutral-400 tracking-wider">
                  <div>{track.type}</div>
                  <div className="text-neutral-600 text-[10px] mt-0.5">{track.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
