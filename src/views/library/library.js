//React
import React from 'react';

// Sub-Components
import TopNav from '../../components/topnav/topnav';
import LibraryRepeat from '../../components/libraryRepeat/libraryRepeat';
import LibraryBottom from '../../components/libraryBottom/libraryBottom';

// Style Sheet
import './library.css';

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentBook: this.props.match.params.bookLabel ?
                        this.props.match.params.bookLabel
                        : '',
            windowOrientation: window.innerWidth > window.innerHeight ?
                'landscape'
                : 'portrait'
        }
        this.changeBook = this.changeBook.bind(this);
        this.closeCurrent = this.closeCurrent.bind(this);
    }
    scrollToSummary(){
        if(document.getElementById('Summary')){
            const summary = document.getElementById('Summary');
            summary.scrollIntoView( { block: 'start', behavior: 'smooth' } );
        }

    }
    changeBook(bookLabel){
        this.setState( { currentBook: bookLabel });

        if(this.props.currentBook){
            if ( document.getElementById('Summary') ){
                const summary = document.getElementById('Summary');
                summary.style.display = 'block';
            }
            setTimeout(this.scrollToSummary, 100);
        }
    }
    closeCurrent(){
        this.setState( { currentBook: '' });
    }
    componentDidMount(){
    }
    render(){
        return(
                <div id="Library">

                    <TopNav
                        language={this.props.language}
                        changeLanguage={this.props.changeLanguage}
                    />

                    <LibraryRepeat
                        language={this.props.language}
                        currentBook={this.state.currentBook}
                        changeBook={this.changeBook}
                        closeCurrent={this.closeCurrent}
                    />

                    <LibraryBottom
                        language={this.props.language}
                        currentBook={this.state.currentBook}
                    />

                    <div className="summaryBar" id="summaryBar">
                        </div>

                </div>
        )
    }
}

export default Library;
