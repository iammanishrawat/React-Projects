import React from 'react'
import styles from './style.module.scss'

const ButtonComponent = ({isOutline, icon, text, ...rest}) => {
  return (
    <button {...rest} className={isOutline ? `${styles.outline_button}` : `${styles.filled_button}`}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonComponent
