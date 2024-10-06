import React from 'react'
import './style.css'
const ButtonComponent = ({title, onClick}) => {
  return (
    <button className='common_btn' onClick={onClick}>
        {title}
    </button>
  )
}

export default ButtonComponent