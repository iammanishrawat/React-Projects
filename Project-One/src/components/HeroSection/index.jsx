import React from 'react'
import './style.css'
const HeroComponent = () => {
  return (
    <>
      <div className="container">
        <div className="hero-section">
          <div className="__left-section">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="button-area">
              <button className='filled'>Shop Now</button>
              <button className='stroke'>Category</button>
            </div>
            <div className="available-section">
              <p>Also available on</p>
              <div className="platform-image-area">
                <img
                  src="../../../public/images/flipkart.png"
                  alt="flipkart icon"
                />
                <img
                  src="../../../public/images/amazon.png"
                  alt="amazon icon"
                />
              </div>
            </div>
          </div>
          <div className="__right-section">
            <img src="../../../public/images/shoe_image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroComponent
