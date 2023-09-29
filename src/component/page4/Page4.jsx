import React from 'react'
import './page4.css'

const Page4 = () => {
  return (
    <div className='page4'>
        <div className='page4Left'>
            <img src="./assets/drk.png" alt="" className='page4Img'/>
        </div>

        <div className='page4Right'>
            <div className='page4Text'>
                <h1 className='page4head'>Book a class</h1>
                <br/>
                <p className='page4para'>Track your workouts, get better reults, and be the best version of you. Less thinking, more lifting.</p>
                <br/>

                <div className='level1'>

                    <div className='contain'>
                        <img src="./assets/icon1.png" alt="" className='imgIcon' />
                    </div>
                    <div className='stage'>
                        <h3 className='stageHeader'>For the beginners</h3>
                        <p className='stagePara'>You never workout before, it is now a <br/> good start</p>
                    </div>
                </div>

                <div className='level2'>

                    <div className='contain'>
                        <img src="./assets/icon2.png" alt="" className='imgIcon' /> 
                    </div>
                    <div className='stage'>
                        <h3 className='stageHeader'>Advanced classes</h3>
                        <p className='stagePara'>You never workout before, it is now a <br/>good start</p>
                    </div>

                </div>

                <div className='level3'>

                    <div className='contain'> 
                        <img src="./assets/icon3.png" alt="" className='imgIcon' />
                    </div>
                        <div className='stage'>
                        <h3 className='stageHeader'>Premium (limited)</h3>
                        <p className='stagePara'>You never workout before, it is now a <br/>good start</p>
                    </div>
                </div>
                <div className='bottom'>
                    <p className='awof'><span className='bonus'>10% Discount</span > if you are already using the <span>Fitness Pro</span> on App Store</p>
                    <button className='bttn1'><span>Book a class</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4