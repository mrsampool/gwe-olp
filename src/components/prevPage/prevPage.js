import React from 'react';

// Style Sheet
import './prevPage.css';

class PrevPage extends React.Component{
    disable(){
        const prevPage = document.getElementById('prevPage');
        prevPage.classList.add('disabled');
    }
    componentDidMount(){
        const prevPage = document.getElementById('prevPage');
        if (this.props.page === 1){
            prevPage.classList.add('disabled');
        } else {
            prevPage.classList.remove('disabled');
        }
    }
    render(){
        return(
            <button 
                id="prevPage"
                className="disabled"
                onClick={ this.props.prevPage }
                >
                    <div className="prevPageSymbol"/>
            </button>
        )
    }
}
export default PrevPage;