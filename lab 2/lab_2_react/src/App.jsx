import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  )
}
