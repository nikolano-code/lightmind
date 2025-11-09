export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70 text-center">
        <div>© {new Date().getFullYear()} LightMind • Minden jog fenntartva.</div>
        <div className="mt-2">Oktatási célú információk, nem minősülnek orvosi tanácsnak.</div>
      </div>
    </footer>
  );
}
