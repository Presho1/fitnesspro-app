import React from 'react'

const Page3 = () => {
  return (
    <div className='home'>
        <div className='left'>
            <div className='homeText'>
                <h1 className='header'> Train smarter, <br/> get stronger.</h1>
                <br/>
                <p className='para2'>Fitness Pro helps track your workouts, get better results, <br/> and be the best version of you. Less thinking, more <br/> lifting 🔥🏀</p>
                <br/>
            </div>
            

            <button className='btn1' style={{ marginTop: '20px' }}><span>Start free trial</span></button>
        </div>

        <div className='right'>
            <img src="./assets/imgs.png" alt="" className='homeImg' />
        </div>

    </div>
  )
}

export default Page3