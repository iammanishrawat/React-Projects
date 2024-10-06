import React, { useState } from 'react'
import { MessageSquareText, Phone } from 'lucide-react'
import styles from './style.module.scss'
import ButtonComponent from '../Button'

const FormComponent = () => {
  const [name, setName] = useState('Manish')
  const [email, setEmail] = useState('manish@mailinator.com')
  const [message, setMessage] = useState('Hello guys')

  const onSubmit = (event) => {
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setMessage(event.target[2].value)
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.form_section}`}>
        <div className={`${styles.flex_button_area}`}>
          <ButtonComponent icon=<MessageSquareText /> text="Via Support Chat" />
          <ButtonComponent icon=<Phone /> text="Via Call" />
        </div>
        <div className={`${styles.single_button_area}`}>
          <ButtonComponent
            isOutline={true}
            icon=<MessageSquareText />
            text="Via Support Chat"
          />
        </div>
        <form onSubmit={onSubmit} className={styles.horizontal_form}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="10"></textarea>
          </div>
          <div className={styles.form_group}>
            <ButtonComponent text="Submit" />
          </div>
          <div>
            <p><b>Name is = </b>{`${name}`}</p>
            <p><b>Email is =</b>{`${email}`}</p>
            <p><b>Message is =</b>{`${message}`}</p>
          </div>
        </form>
      </div>
      <div className="form_image">
        <img src="/svg/Service-image.svg" alt="" />
      </div>
    </div>
  )
}

export default FormComponent
