import { useEffect, useState } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState('');

    useEffect(() => {
      const info = `${navigator.userAgent} (${navigator.oscpu || 'Unknown OS'})`;
      localStorage.setItem('system_info', info);
      setSysInfo(localStorage.getItem('system_info') || info);
    }, []);

  return (
    <footer className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-sm text-slate-600 dark:text-slate-400 space-y-3">
      <div>
        <span className="font-semibold text-slate-800 dark:text-slate-300">Languages: </span>
        Ukrainian (Native), English (Intermediate)
      </div>
      {sysInfo && (
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 break-all">
          <span className="font-semibold text-slate-700 dark:text-slate-400">System Info: </span>
          {sysInfo}
        </div>
      )}
    </footer>
  );
}
