import React from 'react'
import './Welcome.css'





const Welcome = () => {


  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='feature-box'>
                        <h1>JTI AR Research Test</h1>
                        <p>Test and examples used to research Web AR capabilities of different frameworks, devices and environments.</p>
                    </div>

                    <div className='feature-wrapper'>
                        <p>
                            <a className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-controls="collapseExample" aria-expanded="false" aria-label="Toggle navigation">
                            Task 1
                            </a>
                          
                        </p>
                            <div className="collapse" id="collapseExample">
                                <div class="card card-body">
                                <p>This example uses Mind-AR-js. It shows the click funtionality (click on JTI logo) and animation of a flying stork. To run the test open the link in a different window and point your camera (desktop webcam or mobile camera) to the LD bold Image on the right side of this page. Once the image is detected it will load the JTI scene/object</p>
                                <a href='/scene1.html' className='btn btn-success' target='_blank'>Demo Scene 1</a>
                                </div>
                       
                            </div>
                         
                        
                    </div>
                    <div className='feature-wrapper'>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" data-bs-parent="collapseExample2">
                            Task 2
                            </a>
                          
                        </p>
                            <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                               <p>Starting the process for Scene 2.. Check out the process below</p>
                               <a href='/scene1.html' className='btn btn-success' target='_blank'>Demo Scene 2</a>
                                </div>
                            </div>
                         
                        
                    </div>
                </div>
                <div className='col-md-6'>
                   <img src='./Id_bold.png' className='feautureImage'/>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Welcome