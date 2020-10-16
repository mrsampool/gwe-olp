import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './congrats';

import './congrats.css';
class Congrats extends React.Component{
    render(){
        return(
            <div id="complete">
                <div className="completeWindow">

                    <h1>Congrats, you finished this book!</h1>

                    <div className="completeMascotContainer">
                        <div className="speechBubble">
                            <p>I knew you could do it!</p>
                        </div>
                        <div className="completeMascot">
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/graphics/polarbear.png`}
                                alt='GWE Logo'
                            />
                        </div>
                    </div>

                    <div className="congratsOptionsContainer">
                        <h2>Read it again?</h2>
                        <div className="congratsOptions">
                            <button onClick={this.props.readAgain }>Read it again</button>
                            <Link to="/library"><button>Back to Library</button></Link>
                        </div>
                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Congrats;