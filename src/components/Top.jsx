import React from 'react'
import Nav from './Nav'
import Skills from './Skills'

function Top(){
    return (
        <div id="top-begin" className="top">
            <Nav>

            </Nav>
            <h1 className="title">Welcome to my Site! I am Isfar.</h1>
            <img className="pfp" src="./isfarpic.jpg" alt=""/>
            <Skills/>
        </div>
    )
}

export default Top