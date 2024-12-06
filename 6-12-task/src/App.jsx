import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlled from './Components/Controlled'
import UnControlled from './Components/UnControlled'

function App() {
  return (
    <div className=' flex'>
      <Controlled />
      <UnControlled />
    </div>
  )
}

export default App
