export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 text-neutral-500 py-10 text-[10px] tracking-widest uppercase">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>© {new Date().getFullYear()} Fine Lynen. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="https://instagram.com/finelynen" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Spotify</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
