import React from 'react';

// Style Sheet
import './readerPages.css';

// Sub-Components
import ReaderStart from '../readerStart/readerStart';

class ReaderPages extends React.Component{
    sizePage(){
        console.log('Resize');
        // Get Window Dimesions
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        console.log(`Browser Ratio: ${ratio}`)
        // Get Page Dimensions
        const page = document.getElementById('page');
        let pageWidth = page.offsetWidth;
        let pageHeight = page.offsetHeight;
        let pageRatio = pageWidth / pageHeight;
        console.log(`Page Width: ${pageWidth}`)
        console.log(`Page Ratio: ${pageRatio}`);


        

        if ( ratio < pageRatio ){
            page.classList.remove('wide');
            page.classList.add('tall');
        }

        if ( ratio > pageRatio ){
            page.classList.add('wide');
            page.classList.remove('tall');
        }

        console.log(page.width);
    }
    componentDidMount(){
        this.sizePage();
        window.addEventListener('resize', this.sizePage);
        }
    render(){
        return(
            <div className="ReaderPages wide" id="page">

                <img src={ this.props.getPage() }  id="pageImg" />
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