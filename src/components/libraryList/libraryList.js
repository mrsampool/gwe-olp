import React from 'react';

// Style Sheet
import './libraryList.css';

// Media Data
import { MediaList } from '../../data/mediaContent';

// Sub - Components
import LibraryItem from '../libraryItem/libraryItem';


class LibraryList extends React.Component{
    getBookCover(bookLabel){
        return `${process.env.PUBLIC_URL}/assets/books/${bookLabel}/pages/1.jpg`;
    }
    getLibraryList(){
        return MediaList.map( content =>{
            return(
                <LibraryItem
                    title={content.title[this.props.language]}
                    author={content.author}
                    changeBook={this.props.changeBook}
                    key={content.label}
                    label={content.label}
                    cover={this.getBookCover(content.label)}
                />
            )
        })
    }
    render(){
        return(
            <div className="LibraryList">
                {this.getLibraryList()}
            </div>
        )
    }
}

export default LibraryList;