import React from 'react';

// Data
import pageText from '../../data/pageText';

// Sub-Components
import LibraryList from '../libraryList/libraryList';
import Summary from '../summary/summary';
import Mascot from '../mascot/mascot';

// Style Sheet
import './libraryRepeat.css';


class LibraryRepeat extends React.Component{
    render(){
        return(
            <div className="libraryRepeat">

                <h1 className="libraryTitle">
                    {pageText.pageTitles.library[ this.props.language ] }
                </h1>

                <LibraryList
                    changeBook={this.props.changeBook}
                    currentBook={this.props.currentBook}
                    language={this.props.language}
                />
            
                <Summary
                    currentBook={this.props.currentBook}
                    closeCurrent={this.props.closeCurrent}
                    language={this.props.language} 
                />

            </div>
        )
    }
}
export default LibraryRepeat;