import LandingScreenComponent from './components/LandingScreen'
import './App.css'
import GameScreenComponent from './components/GameScreen'
import { useState } from 'react'
function App() {

  const [isGameScreen, setIsGameScreen] = useState(false)

  const toggleGamePLay = () => {
    setIsGameScreen((prev => !prev))
  }

  return (
    <div className="container">
      {
        isGameScreen ? <GameScreenComponent /> : <LandingScreenComponent toggle={toggleGamePLay}  />
      }
    </div>
  )
}

export default App
