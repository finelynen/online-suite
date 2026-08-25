import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("modeling");

  // Placeholder images - Replace paths with your real assets later
  const modelingImages = [
    "https://unsplash.com",
    "https://unsplash.com",
    "https://unsplash.com",
    "https://unsplash.com",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Creative Visual Assets</h2>
        <h1 className="text-3xl font-bold tracking-tight text-white">PORTFOLIO</h1>
      </div>

      {/* Tab Switching Sub-Menu */}
      <div className="flex border-b border-neutral-900 gap-8 mb-12 text-sm tracking-widest uppercase">
        <button
          onClick={() => setActiveTab("modeling")}
          className={`pb-4 border-b-2 font-medium transition-colors ${activeTab === "modeling" ? "border-white text-white" : "border-transparent text-neutral-500 hover:text-neutral-300"}`}
        >
          Modeling
        </button>
        <button
          onClick={() => setActiveTab("acting")}
          className={`pb-4 border-b-2 font-medium transition-colors ${activeTab === "acting" ? "border-white text-white" : "border-transparent text-neutral-500 hover:text-neutral-300"}`}
        >
          Acting Reel
        </button>
      </div>

      {/* Content Rendering Block */}
      {activeTab === "modeling" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {modelingImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-neutral-900 group aspect-[3/4]">
              <img src={src} alt={`Editorial ${index + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500" />
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {/* Responsive Video Container Frame */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-900 bg-neutral-900">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://youtube.com" // Swap with your Vimeo or YouTube Reel
              title="Acting Showreel"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 text-sm text-neutral-400 font-light">
            <h4 className="text-white font-semibold text-base mb-2">Representation Info</h4>
            <p>Height: 6'1" | Hair: Dark Brown | Eyes: Brown</p>
            <p className="mt-1">Available for worldwide theatrical and commercial casting bookings.</p>
          </div>
        </div>
      )}
    </div>
  );
}
