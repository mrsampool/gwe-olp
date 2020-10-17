import React from 'react';
import pageText from '../../data/pageText';

import './narrationControl.css';

class NarrationControl extends React.Component{
    componentDidMount(){
        
        const play = document.getElementById('play');
        const pause = document.getElementById('pause');
        const restart = document.getElementById('restart');

        if (this.props.status === 'stop'){
            play.classList.remove('disabled');
            pause.classList.add('disabled');
            restart.classList.add('disabled');

        } else if (this.props.status === 'playing'){
            console.log('played');
            play.classList.add('disabled');
            pause.classList.remove('disabled');
            restart.classList.remove('disabled');

        } else if (this.props.status === 'pause'){
            play.classList.remove('disabled');
            pause.classList.add('disabled');
        }

        /*

        if (this.props.pageHasPlayed){
            restart.classList.remove('disabled');
        } else if (!this.props.pageHasPlayed){
            restart.classList.add('disabled');
        }

        */
        
    }
    render(){
        return(
            <div className="NarrationControl" id="controls">
                <p>{ pageText.labels.narration[ this.props.language ] }</p>

                <div className="narrControls">

                    <button className="playButton" id="play"
                        onClick={this.props.playPage}
                        alt="Play Narration"
                        >
                        <div className="playSymbol"/>
                    </button>

                    <button className="pauseButton" id="pause"
                        onClick={this.props.pausePage}
                        alt="Pause Narration"
                        >
                        <div className="pauseSymbol"/>
                        <div className="pauseSymbol"/>
                    </button>

                    <button className="replayButton" id="restart"
                        onClick={this.props.restartPage}
                        >
                        <div className="replaySymbolBar"/>
                        <div className="replaySymbolTriangle"/>
                    </button>

                </div>



            </div>
        )
    }
}

export default NarrationControl;