import React from 'react';

// Style Sheet
import './readerPages.css';

// Sub-Components
import ReaderStart from '../readerStart/readerStart';

class ReaderPages extends React.Component{
    constructor(props){
        super(props);
        this.imageLoaded = this.imageLoaded.bind(this);
        this.sizePage = this.sizePage.bind(this);  
    }
    sizePage(){
        const loadScreen = document.getElementById('loading');
        loadScreen.innerText = 'size change \n';
        loadScreen.innerText += `Orientation: ${window.orientation}\n`;
        // Get Window Dimesions
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        loadScreen.innerText += `${`Screen Width: ${screenWidth}\n`}`;
        loadScreen.innerText += `${`Screen Height: ${screenHeight}\n`}`;

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
    }
    imageLoaded(){
        this.sizePage();
        /*

        const loadScreen = document.getElementById('loading');
        loadScreen.style.display = 'none';
        */
        if (this.props.status === 'playing'){
            const audio = document.getElementById('narrator');
            audio.play();
        }
    }
    componentDidMount(){
        this.sizePage();
    }
    render(){
        return(
            <div className="ReaderPages" id="page">

                <div id="loading">
                    <p>Loading...</p>
                </div>

                <div className="pageImg wide" id="pageImg">
                    <img src={ this.props.getPage() }  
                        onLoad={this.imageLoaded} />
                </div>

                {
                    this.props.page === 1 && this.props.narration ? 
                    <ReaderStart
                        book={this.props.book}
                        playNarration={this.props.playNarration}/> 
                    : ''
                }

            </div>
        )
    }
}

export default ReaderPages;