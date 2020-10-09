import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import StartLearning from '../../components/startLearning/startLearning';
import TopNav from '../../components/topnav/topnav';

import pageText from '../../data/pageText';
import Library from '../library/library';
import './splash.css';

class Splash extends React.Component{
    render(){
        return(
            <div className='Splash'>

                <TopNav/>

                <StartLearning/>

                
                    <div className="splashMascot">

                        <div className="speechBubble splash">
                            <p>Ready to hop aboard?</p>
                        </div>

                        <div className="splashMascotCharacter">
                            <img 
                                src='./../images/graphics/polarbear.png'
                                alt='GWE Logo'
                            />
                        </div>


                    </div>

                

            </div>
        )
    }
}

export default Splash;
