import { useState } from 'react'

import './App.css'
import Class01_BasicSlider from './components/Class01_BasicSlider'
import Class02_NavSlider from './components/Class02_NavSlider'
import Class03_AutoPlaySlider from './components/Class03_AutoPlaySlider'
import MultiItemSlider from './components/MultiItemSlider/MultiItemSlider'
import Personalizado from './components/Personalizado'
import PersonalizadoSlider from './components/PersonalizadoSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div>
       
            {/* 
            <Class01_BasicSlider />
            <Class02_NavSlider />
            <Class03_AutoPlaySlider />
            <MultiItemSlider></MultiItemSlider>
            <Personalizado></Personalizado>
            

            */}
            <div>
              <PersonalizadoSlider></PersonalizadoSlider>
            
            </div>
            
          
            
          
          

          

        </div>
    
    </>
  )
}

export default App
