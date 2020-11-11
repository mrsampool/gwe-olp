import React from 'react';

// Sub-Components
import SplashBubbles from '../splashBubbles/splashBubbles';

// Style Sheet
import './splashGraphics.css';

// Image
import BG from './splash.jpg';

class SplashGraphics extends React.Component{
    render(){
        return(
            <div className="splashGraphics">

                <div className="splashBG">
                    <img src={ BG } id='splashBGimg' alt=''/>
                </div>

                <SplashBubbles/>

            </div>

        )
    }
}
export default SplashGraphics;