import { useState } from 'react'

import './App.css'
import Class01_BasicSlider from './components/Class01_BasicSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div>
       
          <Class01_BasicSlider />
        </div>
    
    </>
  )
}

export default App
