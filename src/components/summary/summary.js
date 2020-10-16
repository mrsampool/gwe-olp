import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

// StyleSheet
import './summary.css';

// Media Content
import { Media } from '../../mediaContent';

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
                                <h2 className="summaryTitle">{book.title}</h2>
                                <h3 className="summaryAuthor">by {book.author}</h3>
                            </div>
                            
                            <p className='summaryDesc'>{book.description}</p>
                            
                            <LibraryReadBy
                                readBy={book.reader}
                                narration={book.narration}
                            />
                        </div>

                        <Link to={`/read/${book.label}`}>
                            <button>
                                Start Reading
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
