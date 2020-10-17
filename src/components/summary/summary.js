import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

// StyleSheet
import './summary.css';

// Data
import { Media } from '../../data/mediaContent';
import pageText from '../../data/pageText';

// Sub-Components
import LibraryReadBy from '../libraryReadBy/libraryReadBy';

class Summary extends React.Component{
    constructor(props){
        super(props);
        this.closeCurrent = this.closeCurrent.bind(this);
    }
    closeCurrent(){
        this.props.closeCurrent();
    }
    scrollIn(){
        const summary = document.getElementById('Summary');
        if (summary.style.display = 'block'){
            summary.scrollIntoView({behavior: "smooth", block: "start"}); 
        }
    }
    getSummaryGraphic(bookLabel){
        return `${process.env.PUBLIC_URL}/assets/books/${bookLabel}/pages/1.jpg`
    }
    componentDidMount(){
    }
    render(){
        if (this.props.currentBook){
            const book = Media[this.props.currentBook];
        return(
            <div className="Summary" id="Summary">

                <button className="close"
                    onClick={this.closeCurrent}
                    >X
                </button>
                
                <div className="summaryBody">

                    <div className="summaryGraphic">
                        <img src={ this.getSummaryGraphic(book.label) }/>
                    </div>
                    
                    <div className='summaryRight'>
                        
                        <div className='summaryText'>
                            
                            <div className="summaryTitleAuthor">
                                <h2 className="summaryTitle">{book.title[ this.props.language ] }</h2>
                                <h3 className="summaryAuthor">{ pageText.labels.byAuthor( book.author, this.props.language ) }</h3>
                            </div>
                            
                            <p className='summaryDesc'>{book.description[ this.props.language ] }</p>
                            
                            <LibraryReadBy
                                readBy={book.reader}
                                narration={book.narration}
                                language={ this.props.language }
                            />
                        </div>

                        <Link to={`/read/${book.label}`}>
                            <button>
                                { pageText.buttons.startReading[ this.props.language ] }
                            </button>
                        </Link>
                        
                    </div>

                </div>

            </div>
        )
        }
        else{
            return(
                ''
            )
        }
    }
}

export default Summary;
