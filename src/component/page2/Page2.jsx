import React from 'react'
import './page2.css'

const Page2 = () => {
  return (
    <div className='page2'>
        <div className='up'>
            <p className='pagePara' >We work with people from over the world</p>

           <div className='upContainer'>
                <img src="./assets/Rotashow.png" alt="" className='pageLogo'/>
                <img src="./assets/waves.png" alt="" className='pageLogo'/>
                <img src="./assets/Rotashow.png" alt="" className='pageLogo'/>
                <img src="./assets/Travelers logo.png" alt="" className='pageLogo'/>
                <img src="./assets/Goldlines.png" alt="" className='pageLogo'/>
                <img src="./assets/9 logo.png" alt="" className='pageLogo'/>
           </div>
        </div>

        <div className='pageFirst'>
            <h3 className='header2'>How it works</h3>
            <p className='p'>Stacks is a production-ready library of stackable <br/> content blocks built in React Native.</p>
        </div>

        <div className='pageSecond'>
            <img src="./assets/Frame.png" alt="" className='pageImg'/>
        </div>

        
        <div className="row">
            
            <div className="col">
                <h6 className='header6'>Step 1</h6>
                <h5 className='header5'>Download</h5>
                <p className='colP'>Fitness Pro tracks your workouts, get <br/> better results, and be the best <br/>version of you.</p>
            </div>

            <div className="col">
                <h6 className='header6'>Step 2</h6>
                <h5 className='header5'>Choose your trainner</h5>
                <p className='colP'>Fitness Pro tracks your workouts, get <br/> better results, and be the best <br/>version of you.</p>
            </div>

            <div className="col">
                <h6 className='header6'>Step 3</h6>
                <h5 className='header5'>Set the goals</h5>
                <p className='colP'>Fitness Pro tracks your workouts, get <br/> better results, and be the best <br/> version of you.</p>
            </div>

            <div class="col">
                <h6 className='header6'>Step 4</h6>
                <h5 className='header5'>Workout time</h5>
                <p className='colP'>Fitness Pro tracks your workouts, get <br/> better results, and be the best <br/> version of you.</p>
            </div>

        </div>


    </div>
  )
}

export default Page2