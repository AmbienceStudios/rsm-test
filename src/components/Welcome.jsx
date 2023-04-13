import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='row'>
                {/* Left Section */}
                <div className='col-md-6'>
                    {/* Headline and Description */}
                    <div className='feature-box'>
                        <h1>JTI AR Research Test</h1>
                        <p>Test and examples used to research Web AR capabilities of different frameworks, devices and environments.</p>
                    </div>
                    {/* Collapse Button 1 */}
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
                    {/* Collapse Button 2 */}
                    <div className='feature-wrapper'>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" data-bs-parent="collapseExample2">
                            Task 2
                            </a>
                        </p>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body">
                                <p>Create a 3D model in blender for the Cigarette and added Shape Key animations. Removed the stork and replaced it with the 3D model</p>
                                <a href='/scene2.html' className='btn btn-success' target='_blank'>Demo Scene 2</a>
                            </div>
                        </div>
                    </div>
                       {/* Collapse Button 3 */}
                       <div className='feature-wrapper'>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" data-bs-parent="collapseExample3">
                            Task 3
                            </a>
                        </p>
                        <div class="collapse" id="collapseExample3">
                            <div class="card card-body">
                                <p>Creating an onclick event with a 2D image that will face the camera at all times. On Click, it will open the cigarette up reviling the inside. </p>
                                <a href='/scene3.html' className='btn btn-success' target='_blank'>Demo Scene 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className='col-md-6'>
                    {/* Image */}
                   <img src='./imgs/Id_bold.png' className='feautureImage'/>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Welcome