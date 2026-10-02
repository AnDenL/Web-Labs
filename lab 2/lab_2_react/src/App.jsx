import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Education />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
