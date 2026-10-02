import { useState } from 'react'
import Header from './components/Header';
import './App.css'
import Experience from './components/Experience';
import Education from './components/Education';
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
