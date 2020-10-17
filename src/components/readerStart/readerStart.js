import React from 'react';
import { headshots, Media } from '../../data/mediaContent';

import './readerStart.css';
import pageText from '../../data/pageText';

class ReaderStart extends React.Component{
    getReaderPhoto(readBy){
        if ( headshots[readBy]){
            return (
                <img 
                id="readerPhoto"
                src={headshots[readBy]}/>
            )
        }
    }
    render(){
        const book = Media[this.props.book];
        return(
            <div className="ReaderStart">
                
                <div className="readerTitleAuthor">
                    
                    <h1 className="readerTitle">
                        {book.title[this.props.language]}
                    </h1>

                    <hr/>

                    <h2 className="readerAuthor">
                        { pageText.labels.byAuthor( book.author, this.props.language ) }
                    </h2>
                </div>

                <div className="readerReadBy">

                    { this.getReaderPhoto( book.reader ) }

                    <div className="readByName">
                        <h3>{ pageText.labels.readBy[this.props.language]}</h3>
                        <hr/>
                        <h3>{book.reader}</h3>

                        <button
                            id="playNarration" 
                            onClick={this.props.playNarration }
                            >{ pageText.buttons.playNarration[this.props.language] }
                        </button>

                    </div>



                </div>



            </div>
        )
    }
}

export default ReaderStart;