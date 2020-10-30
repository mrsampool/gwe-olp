import React from 'react';

// Data
import { Media } from '../../data/mediaContent';

// Sub-Components
import ReaderStart from '../readerStart/readerStart';
import Loading from '../loading/loading';

// Style Sheet
import './readerPages.css';

import '../nextPage/nextPage.css';
import pageText from '../../data/pageText';

class ReaderPages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            otherPages: [],
            loading: 1
        }
        this.imageLoaded = this.imageLoaded.bind(this);
        this.loadOtherPages = this.loadOtherPages.bind(this);
    }
    imageLoaded(){
        console.log('Initial Page Loaded')
        // Select Page & Containers
        const pageImg = document.getElementById('pageImg');
        const pageImgFrame = document.getElementById('pageImgFrame');
        const readerContent = document.getElementById('ReaderContent')

        // Determine Page Dimentions
        if (pageImg.naturalWidth < pageImg.naturalHeight){
            pageImgFrame.className = 'pageImgFrame tall';
            readerContent.className = 'ReaderContent tallContent';
        } else {
            pageImgFrame.className = 'pageImgFrame wide';
            readerContent.className = 'ReaderContent wideContent';
        }

        this.props.updateLoadStatus('initialPage', 1)

        // Start Next Audio
        if (this.props.status === 'playing'){
            const audio = document.getElementById('narrator');
            audio.play();
        }

        if (!this.props.narration){
            this.props.updateLoadStatus( 'readerPhoto', 1);
            this.props.updateLoadStatus( 'initialAudio', 1);
        }
    }
    otherPageLoaded(){
        console.log(`Image Loaded`);
    }
    loadOtherPages(){
        const total = Media[this.props.book].pages;
        const pagesArr = [];
        for ( let page = 1; page < total; page++){
            pagesArr.push( {URL: this.props.getNextPage( page ), order: page });
        }
        console.log(pagesArr);
        pagesArr.forEach( (page) =>{
            let pageImg = new Image();
            pageImg.src = page.URL;
            pageImg.onload = this.otherPageLoaded;
        });
    }
    getTranslation(book,page){
        if ( Media[book]['translations'] ){
            return Media[book]['translations'][page].map( phrase =>{
                return <p className="label">{phrase}</p>
            })
        } else {
            return <p className="label">{pageText.messages.spanishComing}</p>
        }
    }
    componentDidMount(){
        window.addEventListener('load', this.loadOtherPages );
        if (!this.props.narration){
            this.props.updateLoadStatus( 'readerPhoto', 1);
            this.props.updateLoadStatus( 'initialAudio', 1);
        }
    }
    render(){
        return(
            <div className="ReaderPages" id="page">

                <Loading
                    status={this.state.loading}
                    // Load Monitors
                    loadedInitalPage = {this.props.loadedInitialPage}
                    loadedInitialAudio = {this.props.loadedInitialAudio}
                    loadedReaderPhoto = {this.props.loadedReaderPhoto}
                />

                {
                    this.props.page === 1 && this.props.narration ? 
                    <ReaderStart
                        book={this.props.book}
                        playNarration={this.props.playNarration}
                        language={this.props.language}
                        updateLoadStatus={this.props.updateLoadStatus}
                    /> 
                    : ''
                }

                <div className="readerPageAndTranslation">

                    <div id="pageImgFrame" className="pageImgFrame wide">
                        <img src={ this.props.getPage() }  
                            onLoad={this.imageLoaded}
                            id="pageImg" 
                            alt="Current Page"/>
                    </div>

                    {
                        this.props.language !== 'eng' ?
                        <div className="translatedText controlBox">
                            { this.getTranslation( this.props.book, this.props.page ) }
                        </div>
                        : ''
                    }

                </div>
            </div>
        )
    }
}

export default ReaderPages;