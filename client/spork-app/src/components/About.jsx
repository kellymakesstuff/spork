import React from 'react'
import '../css/Main.css'

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
                    <p><a href="https://github.com/felicia-csolak">Felicia Csolak</a></p>
                    <p><a href="https://github.com/rizekj12">Josh Rizzek</a></p>
                    <p><a href="https://github.com/kellymakesstuff">Kelly Bergin</a></p>
                    <p><a href="https://github.com/ZoobieLoo88">Zach Glassman</a></p>
                    <p><a href="https://github.com/zainsattar18">Zain Sattar</a></p>
                </div>
            </div>
            <div className="ux-about-header">
                <h2>UX/UI Team</h2>
                <div className="ux-team">
                    <p>Ashley Gluck</p>
                    <p>Juliza Vasquez</p>
                    <p><a href="https://www.linkedin.com/in/stephanie-cardenas-981b2712b/">Stephanie Cardenas</a></p>
                </div>
            </div>
        </div>
        </>
    )
}
