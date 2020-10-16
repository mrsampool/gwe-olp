import React from 'react';

// Style Sheet
import './libraryList.css';

// Media Data
import { MediaList } from '../../mediaContent';

// Sub - Components
import LibraryItem from '../libraryItem/libraryItem';


class LibraryList extends React.Component{
    getBookCover(contentLabel){
        return `${process.env.PUBLIC_URL}assets/books/${contentLabel}/pages/1.jpg`;
    }
    getLibraryList(){
        return MediaList.map( content =>{
            return(
                <LibraryItem
                    title={content.title}
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