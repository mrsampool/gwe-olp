import React from 'react';

// Style Sheet
import './splashBubbles.css';

// Images
import bubbles from '../splashGraphics/bubbles.png';

class SplashBubbles extends React.Component{
    render(){
        return(
            <div className="splashBubbles">

                <div className="bubbleContainer">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer two">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer three">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer four">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer five">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer six">
                    <img className="bubble" src={bubbles}/>
                </div>

            </div>
        )
    }
}
export default SplashBubbles;