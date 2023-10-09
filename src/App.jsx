import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Acasa from './pages/Acasa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Acasa/>
    </>
  )
}

export default App
