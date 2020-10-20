// React
import React from 'react';

// React Components
import {
    Link
  } from "react-router-dom";

// Sub - Components
import Mascot from '../mascot/mascot';

// Style Sheet
import './congrats.css';
import pageText from '../../data/pageText';

class Congrats extends React.Component{
    render(){
        return(
            <div id="complete">
                <div className="completeWindow">

                    <h1>{ pageText.messages.congrats[ this.props.language ] }</h1>

                    <Mascot
                        character="polarbear"
                        type="congrats"
                        language={this.props.language}
                    />

                    <div className="congratsOptionsContainer">
                        <h2>{ pageText.messages.congrats[ this.props.language ] }</h2>
                        <div className="congratsOptions">

                            <button onClick={this.props.readAgain }>
                                { pageText.buttons.readAgain[ this.props.language ] }
                            </button>

                            <Link to="/library">
                                <button>
                                    { pageText.buttons.backLibrary[ this.props.language ] }
                                </button>
                            </Link>

                        </div>
                    </div>

                    

                </div>
            </div>
        )
    }
}

export default Congrats;