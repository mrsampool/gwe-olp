import React from 'react';
import { MediaList } from '../../mediaContent';
import LibraryItem from '../libraryItem/libraryItem';
import './libraryList.css';


class LibraryList extends React.Component{
    getLibraryList(){
        return MediaList.map( content =>{
            return(
                <LibraryItem
                    title={content.title}
                    author={content.author}
                    changeBook={this.props.changeBook}
                    key={content.label}
                    label={content.label}
                    cover={`/books/${content.label}/pages/1.jpg`}
                />
            )
        })
        return this.list[0].Title;
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