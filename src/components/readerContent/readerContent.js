import React from 'react';

//Style Sheet
import './readerContent.css';

//Sub-Components
import ReaderPages from '../readerPages/readerPages';
import NextPage from '../nextPage/nextPage';
import PrevPage from '../prevPage/prevPage';

class ReaderContent extends React.Component{
    render(){
        return(
            <div className="ReaderContent" id="ReaderContent">

                <PrevPage prevPage={this.props.prevPage} key={this.props.page} page={this.props.page}/>

                <ReaderPages
                    language = {this.props.language}
                    //Book & Page Info
                    page = {this.props.page}
                    book = {this.props.book}
                    getPage = {this.props.getPage}
                    getNextPage = {this.props.getNextPage}
                    //Narration
                    playNarration = {this.props.playNarration}
                    narration = {this.props.narration}
                    status = {this.props.status}
                    // Load Monitors
                    loadedInitialPage = {this.props.loadedInitialPage }
                    loadedInitialAudio = {this.props.loadedInitialAudio}
                    loadedReaderPhoto = {this.props.loadedReaderPhoto}
                    updateLoadStatus = {this.props.updateLoadStatus}
                />

                <NextPage nextPage={this.props.nextPage} />

            </div>
        )
    }
}

export default ReaderContent;