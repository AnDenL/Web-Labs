import { useState, useEffect } from 'react';

export default function Reviews({ variant = 11 }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [variant]);

  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md space-y-4 transition-colors">
      <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-800 pb-2">
        Employer Comments
      </h2>

      {loading && <p className="text-slate-600 dark:text-slate-400 text-sm">Loading comments...</p>}

      {error && <p className="text-red-600 dark:text-red-400 text-sm">Failed to load comments.</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-3">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-1"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">{comment.name}</h3>
              <p className="text-xs text-cyan-600 dark:text-cyan-400">{comment.email}</p>
              <p className="text-slate-700 dark:text-slate-300 text-xs mt-2 leading-relaxed">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
