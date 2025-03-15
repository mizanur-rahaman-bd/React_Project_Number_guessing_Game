import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <div className="banner">
        <div className="container">
            <div className="start_button">
                <Link to={''}><img src='Images/start_button.png'/></Link>
                

            </div>
            <div className="heading_text">
                <h1>NUMBER GUESSING GAME</h1>

            </div>
            <div className="powered_by">
                <p>Powered by MIZANUR RAHAMAN</p>

            </div>
        </div>
        

    </div>
    
    </>
  )
}

export default Banner