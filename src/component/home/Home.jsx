import React from 'react'
import './home.css'

const Home = () => {
  return (
        <div className='home'>
            <div className='left'>
                <div className='homeText'>
                    <p className='para1'>TRAIN SMARTER. GET STRONG</p>
                    <br/>
                    <h1 className='header'> Simple fitness <br/> experience for <br/>everyone</h1>
                    <br/>
                    <p className='para2'>Track your workouts, get better reults, and be the best<br/> version of you. Less thinking, more lifting</p>
                    <br/>
                </div>
                

                <button className='btn1'><span>Download App</span></button>
                <button className='btn2'><span>Book a Class</span></button>
            </div>

            <div className='right'>
                <img src="./assets/Dark.png" alt="" className='homeImg' />
            </div>

        </div>
  )
}

export default Home