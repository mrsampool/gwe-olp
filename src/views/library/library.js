//React
import React from 'react';

// Sub-Components
import LibraryList from '../../components/libraryList/libraryList';
import Summary from '../../components/summary/summary';
import Mascot from '../../components/mascot/mascot';

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
    }
    scrollToSummary(){
        if ( document.getElementById('Summary') ){
            const summary = document.getElementById('Summary');
            summary.scrollIntoView( { block: 'start', behavior: 'smooth' } );
        }
    }
    componentDidMount(){
        if(this.props.currentBook){
            if ( document.getElementById('Summary') ){
                const summary = document.getElementById('Summary');
                summary.style.display = 'block';
            }
            setTimeout(this.scrollToSummary, 100)
        }
    }
    render(){
        return(
                <div id="Library">

                    <h1 className="libraryTitle">
                        {pageText.pageTitles.library[ this.props.language ] }
                    </h1>

                    <LibraryList
                        changeBook={this.props.changeBook}
                        currentBook={this.props.currentBook}
                        language={this.props.language}
                    />

                    <div className="summaryBar" id="summaryBar">

                        <Summary id="Summary"
                            currentBook={this.state.currentBook}
                            closeCurrent={this.props.closeCurrent}
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
