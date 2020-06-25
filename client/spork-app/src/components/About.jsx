import React from 'react'
import '../css/Main.css'
import LinkedIn from '../images/linkedin.png'
import GitHub from '../images/github.png'


export default function About() {
  return (
    <>
      <div className="header">
        About the Team
        </div>
      <div className="about-container">
        <h3>Spork was developed by students at General Assembly NYC. This on-going project began June 2020.</h3>
        <div className="sei-about-header">
          <h2>SEI Team</h2>
          <div className="sei-team">
            <a href="https://github.com/felicia-csolak"><img src={GitHub} /></a><p>Felicia Csolak</p>
            <a href="https://github.com/rizekj12"><img src={GitHub} /></a><p>Josh Rizzek</p>
            <a href="https://github.com/kellymakesstuff"><img src={GitHub} /></a><p>Kelly Bergin</p>
            <a href="https://github.com/ZoobieLoo88"><img src={GitHub} /></a><p>Zach Glassman</p>
            <a href="https://github.com/zainsattar18"><img src={GitHub} /></a><p>Zain Sattar</p>
          </div>
        </div>
        <div className="ux-about-header">
          <h2>UX/UI Team</h2>
          <div className="ux-team">
            <a href="https://www.linkedin.com/in/ashley-gluck-56134b1b1/"><img src={LinkedIn} /></a><p>Ashley Gluck</p>
            <a href="https://github.com/rizekj12"><img src={LinkedIn} /></a><p>Juliza Vasquez</p>
            <a href="https://www.linkedin.com/in/stephanie-cardenas-981b2712b/"><img src={LinkedIn} /></a><p>Stephanie Cardenas</p>

          </div>
        </div>
      </div>
    </>
  )
}
