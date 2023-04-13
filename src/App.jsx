import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Welcome/>    
    </div>
        

  )
}

export default App
