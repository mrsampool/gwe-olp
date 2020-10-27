//React
import React from 'react';

// Sub-Components
import LibraryList from '../../components/libraryList/libraryList';
import Summary from '../../components/summary/summary';
import Mascot from '../../components/mascot/mascot';
import TopNav from '../../components/topnav/topnav';

// Style Sheet
import './library.css';
import pageText from '../../data/pageText';

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentBook: this.props.match.params.bookLabel ?
                        this.props.match.params.bookLabel
                        : '',
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

                    <h1 className="libraryTitle">
                        {pageText.pageTitles.library[ this.props.language ] }
                    </h1>

                    <LibraryList
                        changeBook={this.changeBook}
                        currentBook={this.props.currentBook}
                        language={this.props.language}
                    />

                    <div className="summaryBar" id="summaryBar">

                        <Summary
                            currentBook={this.state.currentBook}
                            closeCurrent={this.closeCurrent}
                            language={this.props.language} 
                        />

                        <Mascot
                            character="penguin"
                            type="library"
                            language={this.props.language}
                        />

                    </div>

                </div>
        )
    }
}

export default Library;
