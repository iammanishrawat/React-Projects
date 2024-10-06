import React from 'react'
import ButtonComponent from '../UI/Button'
import './style.css'

const LandingScreenComponent = ({toggle}) => {
  return (
    <div>
        <div className="flex">
            <div className="__left">
                <img src="./images/dice.png" alt="" />
            </div>
            <div className="__right">
                <h2>DICE GAME</h2>
                <ButtonComponent title="Play Now" onClick={toggle} />
            </div>
        </div>
    </div>
  )
}

export default LandingScreenComponent