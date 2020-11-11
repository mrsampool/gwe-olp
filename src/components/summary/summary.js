import React from 'react';
import {
    Link
  } from "react-router-dom";

// StyleSheet
import './summary.css';

// Data
import { Media } from '../../data/mediaContent';
import pageText from '../../data/pageText';

// Sub-Components
import LibraryReadBy from '../libraryReadBy/libraryReadBy';
import CloseButton from '../closeButton/closeButton';

class Summary extends React.Component{
    constructor(props){
        super(props);
        this.closeCurrent = this.closeCurrent.bind(this);
    }
    closeCurrent(){
        console.log('close');
        this.props.closeCurrent();
    }
    scrollIn(){
        if ( document.getElementById('Summary') ){
        }
        const summary = document.getElementById('Summary');
        if (summary.style.display === 'block'){
            summary.scrollIntoView({behavior: "smooth", block: "start"}); 
        }
    }
    getSummaryGraphic(bookLabel){
        return `${process.env.PUBLIC_URL}/assets/books/${bookLabel}/pages/1.jpg`
    }
    componentDidMount(){
        if ( document.getElementById('Summary') ){
            setTimeout(this.scrollIn(),500);
        }
    }
    render(){
        if (this.props.currentBook){
            const book = Media[this.props.currentBook];
        return(
                <div className="Summary controlBox" id="Summary">

                    <CloseButton closeCurrent={this.closeCurrent} type='summary'/>
                    
                    <div className="summaryBody">

                        <div className="summaryGraphic" >
                            <img id="summaryGraphic" src={ this.getSummaryGraphic(book.label) } alt="Book Cover" />
                        </div>
                        
                        <div className='summaryRight'>
                            
                            <div className='summaryText'>
                                
                                <div className="summaryTitleAuthor label">
                                    <h2 className="summaryTitle">{book.title[ this.props.language ] }</h2>
                                    <hr/>
                                    <h3 className="summaryAuthor">{ pageText.labels.byAuthor( book.author, this.props.language ) }</h3>
                                </div>
                                
                                <p className='summaryDesc label'>{book.description[ this.props.language ] }</p>
                                
                                <LibraryReadBy
                                    readBy={
                                        book.reader ?
                                        book.reader[this.props.language] 
                                        : 0
                                    }
                                    narration={book.narration}
                                    runTime={book.runTime ? book.runTime[this.props.language] : ''}
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
