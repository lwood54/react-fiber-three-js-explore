import React, { useState } from 'react'
import './App.css'
import FirstTJS from './components/three-js/first-tjs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FirstTJS />
    </div>
  )
}

export default App
