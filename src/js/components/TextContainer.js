import React from 'react'
import '../views/App.css'
import Image from '../../assets/images/icon-success.svg'

export function TextContainer() {
  return (
    <>
    <h1 id='topHead'>Stay updated!</h1>
    <p>Join 60,000+ product managers receiving monthly updates on:</p><br></br>

    <article class="items">
      <div>
        <img 
        alt = 'icon-success'
        src={ Image } /> 
        <p>Product discovery and building what matters</p>
      </div>
      <div>
        <img 
        alt = 'icon-success'
        src={ Image } /> 
        <p>Measuring to ensure updates are a success</p>
      </div>
      <div>
        <img 
        alt = 'icon-success'
        src={ Image } /> 
        <p>And much more!</p> 
      </div>
    </article>
    </>
  )
}