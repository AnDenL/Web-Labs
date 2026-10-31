export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md border-t-4 border-t-cyan-500 space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Denys Lebediuk
        </h1>
        <p className="text-lg text-cyan-600 dark:text-cyan-400 font-medium">
          Game developer / System programmer
        </p>
      </div>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2">
        Contact information
      </h2>

      <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-1">
        <li><b>Email: </b><a href="mailto:andenl145@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">andenl145@gmail.com</a></li>
        <li><b>Phone: </b>+380 98 300 84 32</li>
        <li><b>Telegram: </b>@AnDenLeb</li>
        <li><b>GitHub: </b><a href="https://github.com/AnDenL" target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">github.com/AnDenL</a></li>
        <li><b>Itch: </b><a href="https://andenl.itch.io/" target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">andenl.itch.io/</a></li>
        <li><b>Location: </b>Lviv, Ukraine</li>
      </ul>
    </header>
  );
}
