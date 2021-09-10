import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {close_submenu} = useGlobalContext();
  return <section className="hero" onMouseOver={close_submenu}>
    <div className="hero-center">
      <article>
        <h1>
          payments infrastructure for the internet
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur magnam illum nisi veritatis cumque incidunt ipsam quas obcaecati quos ab.
        </p>
        <button className="btn">
          sign in
        </button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} className="phone-img" alt='phone' />
      </article>
    </div>
  </section>
}

export default Hero
