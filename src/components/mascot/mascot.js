import React from 'react';

// Page Text
import pageText from '../../data/pageText';

// Style Sheet
import './mascot.css';

// Images
import polarbear from './polarbear.png'; 
import penguin from './penguin.png';

class Mascot extends React.Component{
    constructor(props){
        super(props);
        this.getSpeech = this.getSpeech.bind(this);
    }
    getSpeech(){
        return pageText.speechBubbles.getSpeech(this.props.type, this.props.language)
    }
    render(){
        const characters = {
            'polarbear': polarbear,
            'penguin': penguin
        }
        return(
            <div className={`Mascot ${this.props.type ? this.props.type : ''}`} id="Mascot">

                <div className="speechBubble">
                    <p>{ this.getSpeech() }</p>
                </div>

                <div className="mascotCharacter">
                    <img 
                        src={ characters[this.props.character] }
                        alt='GWE Logo'
                    />
                </div>

            </div>  
        )
    }
}

export default Mascot;