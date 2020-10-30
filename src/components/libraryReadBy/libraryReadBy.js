import React from 'react';

import { headshots } from '../../data/mediaContent';

import './libraryReadBy.css';
import pageText from '../../data/pageText';

class LibraryReadBy extends React.Component{
    getReaderPhoto(readBy){
        if (headshots[readBy]){
            return (
            <div className="libReadByPhoto">
                <img src={headshots[readBy]} alt="Narrator"/>
            </div>
                )
        }
    }
    render(){
        return (
            <div className="LibraryReadBy label">

                {
                    this.props.narration ?

                    <div className="readByContent">

                        { this.getReaderPhoto( this.props.readBy) }

                        <div className="libReadByName">
                            <p>{ pageText.labels.readBy[ this.props.language ] }</p> 
                            <p>{this.props.readBy}</p>
                        </div>

                    </div>

                    :
                    <div className="libReadByName">
                        <p>{ pageText.labels.narrComing[this.props.language ] }</p> 
                    </div>
                }
            </div>
        )
    }
}

export default LibraryReadBy;