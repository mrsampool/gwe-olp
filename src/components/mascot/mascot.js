import React from 'react';

// Page Text
import pageText from '../../data/pageText';

// Style Sheets
import './mascot.css';
import './mascotSplash.css';
import './mascotLibrary.css';
import './mascotCongrats.css';

// Images
import polarbear from './polarbear.png'; 
import penguin from './thefluff.png';


class Mascot extends React.Component{
    constructor(props){
        super(props);
        this.getSpeech = this.getSpeech.bind(this);
    }
    getSpeech(){
        return pageText.speechBubbles.getSpeech(this.props.message, this.props.language)
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

                <div className="mascotCharacter" id={this.props.id ? this.props.id : ''}>
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