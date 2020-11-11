import React from 'react';

// Page Text
import pageText from '../../data/pageText';

// Style Sheets
import './mascot.css';
import './theFluff.css';
import './mascotSplash.css';
import './mascotLibrary.css';
import './mascotCongrats.css';

// Images

import fluffLayout from './fluff/fluff_1layout.png';
import fluffBody from './fluff/fluff_1a.png';
import fluffLeftArmTop from './fluff/fluff_1b.png';
import fluffRightArmTop from './fluff/fluff_1c.png';

import fluffLeftArmBottom from './fluff/fluff_1d.png';
import fluffRigthArmBottom from './fluff/fluff_1e.png';
import fluffShadow from './fluff/fluff_1f.png';


class Mascot extends React.Component{
    constructor(props){
        super(props);
        this.getSpeech = this.getSpeech.bind(this);
    }
    getSpeech(){
        return pageText.speechBubbles.getSpeech(this.props.message, this.props.language)
    }
    render(){
        return(
            <div className={`Mascot fluff ${this.props.type ? this.props.type : ''}`} id="Mascot">

                <div className="speechBubble">
                    <p>{ this.getSpeech() }</p>
                </div>

                <div className="mascotCharacter" id={this.props.id ? this.props.id : ''}>
                    
                    <img src={fluffLeftArmTop} id='fluffLeftArmTop'/>
                    <img src={fluffRightArmTop} id='fluffRightArmTop' />
                    <img src={fluffBody} id='fluffBody'/>

                </div>

                <div className='mascot fluff shadow'>
                    
                </div>

            </div>  
        )
    }
}

export default Mascot;