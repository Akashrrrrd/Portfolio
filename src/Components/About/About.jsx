import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={about_profile}/>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I am a passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. Proficient in HTML, CSS, and JavaScript, I excel in developing responsive and accessible websites that deliver seamless performance across various devices and browsers.</p>
            <p>As a strong communicator and team player, I thrive in collaborative environments and am dedicated to delivering high-quality, innovative solutions.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className='about-skill'><p>SQL</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>10+</h1>
          <p>COURSES COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About