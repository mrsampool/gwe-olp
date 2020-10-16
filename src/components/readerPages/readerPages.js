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

        console.log(window.orientation);
        console.log('size change');
        // Get Window Dimesions
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        console.log(`Window: ${width} x ${height}`);

        // Get Page Dimensions
        const page = document.getElementById('pageImg');
        let pageWidth = page.offsetWidth;
        let pageHeight = page.offsetHeight;
        let pageRatio = pageWidth / pageHeight;
        console.log(`Image: ${pageWidth}W x ${pageHeight}H - PAGE RATIO: ${pageRatio}`);

        if ( ratio < pageRatio ){
            console.log('Image wider than window');
            page.classList.remove('wide');
            page.classList.add('tall');
        }

        if ( ratio > pageRatio ){
            console.log('Window wider than image');
            page.classList.add('wide');
            page.classList.remove('tall');
        }
        page.src = this.props.getPage();
        
    }
    imageLoaded(){
        console.log('image load');

        this.sizePage();

        const loadScreen = document.getElementById('loading');
        loadScreen.style.display = 'none';
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