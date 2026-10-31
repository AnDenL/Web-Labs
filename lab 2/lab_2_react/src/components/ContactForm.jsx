import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 max-w-md w-full relative shadow-2xl space-y-4 transition-colors">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-2xl font-bold cursor-pointer transition-colors"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Us</h3>

        <form action="https://formspree.io/f/mljjpdlr" method="POST" className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 rounded-lg transition-colors text-sm cursor-pointer shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
