import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dapp } from "./components/Dapp.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Dapp />
    </>
  )
}

export default App