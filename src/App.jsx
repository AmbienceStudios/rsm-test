import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppContainer">
      <Welcome/>    
    </div>
        

  )
}

export default App
