import React from 'react';

// Sub-Components
import StartLearning from '../../components/startLearning/startLearning';
import Mascot from '../../components/mascot/mascot';
import TopNav from '../../components/topnav/topnav';

//Style Sheet
import './splash.css';

// Images
import splashBG from './splashBG copy.jpg';
import TRAIN from './TRAIN.png';
import SplashNav from '../../components/splashNav/splashNav';

class Splash extends React.Component{
    render(){
        return(
            <div className='Splash'>

                <div className="splashBG">
                    <img src={ TRAIN } alt=''/>
                </div>

                <div className="bubbleContainer">
                    <div className="bubble"/>
                </div>

                <div className="bubbleContainer two">
                    <div className="bubble"/>
                </div>

                <div className="bubbleContainer three">
                    <div className="bubble"/>
                </div>

                <div className="bubbleContainer four">
                    <div className="bubble"/>
                </div>

                <div className="bubbleContainer five">
                    <div className="bubble"/>
                </div>

                <div className="bubbleContainer six">
                    <div className="bubble"/>
                </div>

                <SplashNav
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                />

            </div>
        )
    }
}

export default Splash;