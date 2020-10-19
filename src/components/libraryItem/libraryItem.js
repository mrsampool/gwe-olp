import React from 'react';
import { Link } from 'react-router-dom';

//Style Sheet
import './libraryItem.css';

class LibraryItem extends React.Component{
    constructor(props){
        super(props);
        this.setBook = this.setBook.bind(this);
    }
    scrollTo(){
        if ( document.getElementById('Summary') ){
            const libraryList = document.getElementById('libraryList');
            libraryList.scrollIntoView( { block: 'end', behavior: 'smooth' } );
        }
    }
    setBook(event){
        this.props.changeBook(event, this.props.label);
        // setTimeout(this.scrollTo,100)
    }
    render(){
        return(
            
            <Link to={`/library/${this.props.label}`}>
                <button 
                    className="mediaListEntry"
                    onClick={this.setBook}>

                    <div className="mediaGraphic">
                        <img src={this.props.cover}/>
                    </div>

                    <div className='mediaDets'>
                        <h2 className='mediaTitle'>{this.props.title}</h2>
                        <hr/>
                        <h3 className='mediaAuthor'>{this.props.author}</h3>
                    </div>

                </button>
            </Link>
            
        )        
    }
}

export default LibraryItem;