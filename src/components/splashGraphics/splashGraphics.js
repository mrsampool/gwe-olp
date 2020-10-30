import React from 'react';

// Sub-Components
import SplashBubbles from '../splashBubbles/splashBubbles';

// Style Sheet
import './splashGraphics.css';

// Image
import TRAIN from './TRAIN.png';

class SplashGraphics extends React.Component{
    render(){
        return(
            <div className="splashGraphics">

                <div className="splashBG">
                    <img src={ TRAIN } alt=''/>
                </div>

                <SplashBubbles/>

            </div>

        )
    }
}
export default SplashGraphics;