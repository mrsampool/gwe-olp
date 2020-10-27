import React from 'react';

//Style Sheet
import './libraryItem.css';

class LibraryItem extends React.Component{
    constructor(props){
        super(props);
        this.setBook = this.setBook.bind(this);
    }
    scrollTo(){
        if ( document.getElementById('Summary') ){
            const summary = document.getElementById('Summary');
            summary.scrollIntoView( { block: 'start', behavior: 'smooth' } );
        }
    }
    setBook(){
        console.log('SetBook')
        this.props.changeBook(this.props.label);
        setTimeout(this.scrollTo,500)
    }
    render(){
        return(
            
            
                <button 
                    className="mediaListEntry"
                    onClick={this.setBook}>

                    <div className="mediaGraphic">
                        <img src={this.props.cover} alt="Book Cover"/>
                    </div>

                    <div className='mediaDets'>
                        <h2 className='mediaTitle'>{this.props.title}</h2>
                        <hr/>
                        <h3 className='mediaAuthor'>{this.props.author}</h3>
                    </div>

                </button>
            
            
        )        
    }
}

export default LibraryItem;