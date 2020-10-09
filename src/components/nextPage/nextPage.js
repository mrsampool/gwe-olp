import React from 'react';

// Style Sheet
import './nextPage.css';

class NextPage extends React.Component{
    render(){
        return(
            <button 
                id="nextPage"
                onClick={ this.props.nextPage }
                >
                    <div className="nextPageSymbol"/>
            </button>
        )
    }
}
export default NextPage;
