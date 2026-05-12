export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Eventt. Crafted for premium event experiences.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-white">Privacy</a>
          <a href="#" className="transition hover:text-white">Terms</a>
          <a href="#" className="transition hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
