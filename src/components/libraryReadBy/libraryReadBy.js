import React from 'react';

import { headshots } from '../../mediaContent';

import './libraryReadBy.css';

class LibraryReadBy extends React.Component{
    getReaderPhoto(readBy){
        if (headshots[readBy]){
            return (
            <div className="libReadByPhoto">
                <img src={headshots[readBy] }/>
            </div>
                )
        }
    }
    render(){
        return (
            <div className="LibraryReadBy">

                {
                    this.props.narration ?

                    <div className="readByContent">

                        { this.getReaderPhoto( this.props.readBy) }

                        <div className="libReadByName">
                            <p>Read by</p> 
                            <p>{this.props.readBy}</p>
                        </div>

                    </div>

                    :
                    <div className="libReadByName">
                        <p>Narration Coming Soon</p> 
                    </div>
                }
            </div>
        )
    }
}

export default LibraryReadBy;