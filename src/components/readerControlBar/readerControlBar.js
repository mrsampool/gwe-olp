// React Dependencies
import React from 'react';
import {
    Link
  } from "react-router-dom";

// Style Sheet
import './readerControlBar.css';

// Sub-Components
import ReactAudioPlayer from 'react-audio-player';
import NarrationControl from '../Narration Control/narrationControl';
import ReaderProgress from '../readerProgress/readerProgress';
import Translate from '../translate/translate';
import CloseButton from '../closeButton/closeButton';

class ReaderControlBar extends React.Component{
    constructor(props){
        super(props);
        this.handleAudioLoad = this.handleAudioLoad.bind(this);
    }
    handleAudioLoad(){
        this.props.updateLoadStatus( 'initialAudio', 1);
    }
    componentDidMount(){
        const narrator = document.getElementById('narrator');
        //narrator.addEventListener('canplaythrough', this.handleAudioLoad );
        //narrator.load();
        
    }
    render(){
        return(
            <div className="ReaderControlBar">

                <ReactAudioPlayer
                    id="narrator"
                    key={this.props.page}
                    src={ this.props.getAudio() }
                    onCanPlayThrough={ this.handleAudioLoad }
                    onEnded={this.props.nextPage}
                />

                <div className="mobileTop">

                        {
                            this.props.narration ?
                            <NarrationControl
                                playPage={this.props.playPage}
                                pausePage={this.props.pausePage}
                                restartPage={this.props.restartPage}
                                status = {this.props.status}
                                key={this.props.status}
                                pageHasPlayed = {this.props.pageHasPlayed}
                                // Language
                                language={this.props.language}
                                changeLanguage={this.props.changeLanguage}
                                restartPage={this.props.restartPage}
                            />
                            : ''
                        }

                    <Link to="/library" id="mobileClose">
                        <CloseButton/>
                    </Link>

                </div>

                <ReaderProgress
                    page = {this.props.page}
                    totalPages = {this.props.totalPages}
                    inputPage = {this.props.inputPage}
                    slidePage = {this.props.slidePage}
                    language = {this.props.language}
                />
            
                <Link to="/library"  id="standardClose">
                    <CloseButton/>
                </Link>
        
        </div>
        
        )
    }
}

export default ReaderControlBar;