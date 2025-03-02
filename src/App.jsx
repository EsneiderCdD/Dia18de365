import { useState } from 'react'

import './App.css'
import Class01_BasicSlider from './components/Class01_BasicSlider'
import Class02_NavSlider from './components/Class02_NavSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div>
       
          <Class01_BasicSlider />
          <Class02_NavSlider />
        </div>
    
    </>
  )
}

export default App
