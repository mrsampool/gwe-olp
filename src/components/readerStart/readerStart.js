import React from 'react';
import { headshots, Media } from '../../mediaContent';

import './readerStart.css';

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
                    <h1 className="readerTitle">{book.title}</h1>
                    <h2 className="readerAuthor">By {book.author}</h2>
                </div>

                <div className="readerReadBy">

                    { this.getReaderPhoto( book.reader ) }

                    <div className="readByName">
                        <h3>Read by</h3>
                        <h3>{book.reader}</h3>
                    </div>

                </div>

                <button
                    id="playNarration" 
                    onClick={this.props.playNarration}
                    >Play Narration
                </button>

            </div>
        )
    }
}

export default ReaderStart;