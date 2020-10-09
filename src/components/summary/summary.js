import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './summary.css';
import { Media } from '../../mediaContent';
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
                        <img src={`/books/${book.label}/pages/1.jpg`}/>
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

                        <Link to="/read"><button>Start Reading</button></Link>
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
