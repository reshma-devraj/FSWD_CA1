import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ServiceCard from './components/ServiceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <ServiceCard name= "reshma" job= "fswd"/>
       <ServiceCard name= "devraj" job= "fswd"/>
    </div>             
  )
}

export default App
