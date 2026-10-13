export default function Header() {
  return (
    <header className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl border-t border-t-cyan-500">
      <div className="gap-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">Denys Lebediuk</h1>
        <p className="text-lg text-400 font-medium">Game developer / System programmer</p>
      </div>

      <h2 className="text-2xl font-semibold text-white tracking-tight">Contact information</h2>
      <div className="text-slate-500 font-semibold">
        <ul>
          <li><b>Email: </b><a href="mailto:andenl145@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors">andenl145@gmail.com</a></li>

          <li><b>Phone: </b>+380 98 300 84 32</li>

          <li><b>Telegram: </b>@AnDenLeb</li>

          <li><b>GitHub: </b><a href="https://github.com/AnDenL" target="_blank" rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors">github.com/AnDenL</a></li>

          <li><b>Itch: </b><a href="https://andenl.itch.io/" target="_blank" rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors">https://andenl.itch.io/</a></li>

          <li><b>Location: </b>Lviv, Ukraine</li>
        </ul>
      </div>
    </header>
    );
  }
