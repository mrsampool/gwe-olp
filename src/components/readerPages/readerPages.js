import React from 'react';



// Sub-Components
import ReaderStart from '../readerStart/readerStart';

// Style Sheet
import './readerPages.css';

// Icon
import loadIcon from './loadIcon.png';

class ReaderPages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        }
        this.imageLoaded = this.imageLoaded.bind(this);
        this.sizePage = this.sizePage.bind(this);  

    }
    sizePage(){


        /*
        console.log('Size Change')
        const loadScreen = document.getElementById('loading');
        loadScreen.innerText = 'size change \n';
        loadScreen.innerText += `Orientation: ${window.orientation}\n`;
        // Get Window Dimesions
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        loadScreen.innerHTML += `${`Screen Width: ${screenWidth}\n`}`;
        loadScreen.innerHTML += `${`Screen Height: ${screenHeight}\n`}`;

        if (screenWidth > screenHeight){
            loadScreen.innerText += `Wide Screen\n`;

        } else if (screenHeight > screenWidth){
            loadScreen.innerText += `Tall Screen\n`;
        }

        // Get Window Dimesions
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;

        // Get Page Dimensions
        const page = document.getElementById('pageImg');
        let pageWidth = page.offsetWidth;
        let pageHeight = page.offsetHeight;
        let pageRatio = pageWidth / pageHeight;

        if ( ratio < pageRatio ){
            page.classList.remove('wide');
            page.classList.add('tall');
        }

        if ( ratio > pageRatio ){
            page.classList.add('wide');
            page.classList.remove('tall');
        }
        page.src = this.props.getPage();
        */
    }
    imageLoaded(){
        const pageImg = document.getElementById('pageImg');
        const pageImgFrame = document.getElementById('pageImgFrame');
        const readerContent = document.getElementById('ReaderContent')

        if (pageImg.naturalWidth < pageImg.naturalHeight){
            pageImgFrame.className = 'pageImgFrame tall';
            readerContent.className = 'ReaderContent tallContent';
        } else {
            pageImgFrame.className = 'pageImgFrame wide';
            readerContent.className = 'ReaderContent wideContent';
        }

        const loadScreen = document.getElementById('loading');
        loadScreen.style.display = 'none';
        
        if (this.props.status === 'playing'){
            const audio = document.getElementById('narrator');
            audio.play();
        }
    }
    render(){
        return(
            <div className="ReaderPages" id="page">
                
                <div id="loading">
                    <img src={loadIcon}
                    alt="loading" />
                </div>

                {
                    this.props.page === 1 && this.props.narration ? 
                    <ReaderStart
                        book={this.props.book}
                        playNarration={this.props.playNarration}
                        language={this.props.language}
                    /> 
                    : ''
                }
                
                <div id="pageImgFrame">
                    <img src={ this.props.getPage() }  
                        onLoad={this.imageLoaded}
                        id="pageImg" 
                        alt="Current Page"/>
                </div>

            </div>
        )
    }
}

export default ReaderPages;