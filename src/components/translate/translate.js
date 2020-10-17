import React from 'react';
import pageText from '../../data/pageText';
import './translate.css';

class Translate extends React.Component{
    render(){
        return(
            <button className='translate'
                onClick={this.props.changeLanguage}>
                { pageText.buttons.translate[ this.props.language ] }
            </button>
        )
    }
}

export default Translate;
