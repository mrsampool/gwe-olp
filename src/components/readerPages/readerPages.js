import React from 'react';

// Data
import { Media } from '../../data/mediaContent';

// Sub-Components
import ReaderStart from '../readerStart/readerStart';
import Loading from '../loading/loading';

// Style Sheet
import './readerPages.css';

import '../nextPage/nextPage.css';

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
        // Start Next Audio
        if (this.props.status === 'playing'){
            const audio = document.getElementById('narrator');
            audio.play();
        }
        this.props.updateLoadStatus( 'initialPage', 1)
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
    handleLoaded(){

    }
    getTranslation(book,page){
        return Media[book]['translations'][page].map( phrase =>{
            return <p>{phrase}</p>
        })
    }
    componentDidMount(){
        window.addEventListener('load', this.loadOtherPages );
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
                
                <div id="pageImgFrame" className="pageImgFrame wide">
                    <img src={ this.props.getPage() }  
                        onLoad={this.imageLoaded}
                        id="pageImg" 
                        alt="Current Page"/>
                </div>

                {
                    this.props.language !== 'eng' ?
                    <div className="translatedText">
                        { this.getTranslation( this.props.book, this.props.page ) }
                    </div>
                    : ''
                }

            </div>
        )
    }
}

export default ReaderPages;