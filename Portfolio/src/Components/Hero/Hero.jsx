import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img}/>
      <h1><span>I'm Akash Rajendran,</span> frontend developer based in Chennai.</h1>
      <p>I'm a frontend developer from Chennai, with 2 years of experience in startup companies like Innovest, CodeBind Technologies and Intern at Prep Insta.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero