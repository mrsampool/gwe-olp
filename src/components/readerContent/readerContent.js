import React from 'react';

//Style Sheet
import './readerContent.css';

//Sub-Components
import ReaderPages from '../readerPages/readerPages';
import NextPage from '../nextPage/nextPage';
import PrevPage from '../prevPage/prevPage';

class ReaderContent extends React.Component{
    render(){
        return(
            <div className="ReaderContent">

                <PrevPage prevPage={this.props.prevPage} key={this.props.page} page={this.props.page}/>

                <ReaderPages
                    page = {this.props.page}
                    book = {this.props.book}
                    narration = {this.props.narration}
                    getPage = {this.props.getPage}
                    playNarration = {this.props.playNarration}
                />

                <NextPage nextPage={this.props.nextPage} />

            </div>
        )
    }
}

export default ReaderContent;