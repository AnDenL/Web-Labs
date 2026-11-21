import { useState, useEffect } from 'react';

import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-cyan-400 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer shadow-sm"
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>

        <Header />
        <Experience />
        <Education />
        <Reviews variant={11} />
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}
