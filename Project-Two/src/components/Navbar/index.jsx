import React from 'react'
import styles from './style.module.scss'
const NavbarComponent = () => {
  return (
    <>
        <nav className='container'>
            <div className={styles.navigation}>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo image" />
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavbarComponent