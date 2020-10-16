//React
import React from 'react';

// Sub-Components
import TopNav from '../../components/topnav/topnav';
import LibraryList from '../../components/libraryList/libraryList';
import Summary from '../../components/summary/summary';
import Mascot from '../../components/mascot/mascot';

// Style Sheet
import './library.css';

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentBook: this.props.match.params.bookLabel ?
                        this.props.match.params.bookLabel
                        : '',
        }
    }
    componentDidMount(){
        if(this.props.currentBook){
            if ( document.getElementById('Summary') ){
                const summary = document.getElementById('Summary');
                summary.style.display = 'block';
            }
        }
    }
    render(){
        return(
                <div id="Library">

                    <TopNav/>

                    <h1 className="libraryTitle">Learning Library</h1>

                    <LibraryList
                        changeBook={this.props.changeBook}
                        currentBook={this.props.currentBook}
                    />

                    <div className="summaryBar">

                        <Summary id="Summary"
                            currentBook={this.state.currentBook}
                            closeCurrent={this.props.closeCurrent} 
                        />

                        <Mascot
                            character="penguin"
                            type="library"
                        />


                    </div>
                    



                </div>
        )
    }
}

export default Library;
