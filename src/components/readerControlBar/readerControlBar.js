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
import ReadTranslate from '../readTranslate/readTranslate';
import ReaderProgress from '../readerProgress/readerProgress';
import Translate from '../translate/translate';

class ReaderControlBar extends React.Component{
    render(){
        return(
            <div className="ReaderControlBar">

                <ReactAudioPlayer
                    id="narrator"
                    src={this.props.getAudio() }
                    onEnded={this.props.nextPage}
                />

                <div className="mobileTop">
                    <div className="transNarrCont">

                        <Translate
                            language={this.props.language}
                            changeLanguage={this.props.changeLanguage}
                        />

                        {
                            this.props.narration ?
                            <NarrationControl
                                playPage={this.props.playPage}
                                pausePage={this.props.pausePage}
                                restartPage={this.props.restartPage}
                                status = {this.props.status}
                                key={this.props.status}
                                pageHasPlayed = {this.props.pageHasPlayed}
                                language={this.props.language}
                            />
                            : ''
                        }

                    </div>

                    <Link to="/library" id="mobileClose">
                        <button
                            className="close reader">
                                X
                        </button>
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
                    <button
                        className="close reader">
                            X
                    </button>
                </Link>
        
        </div>
        
        )
    }
}

export default ReaderControlBar;