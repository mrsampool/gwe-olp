import React from 'react';
import pageText from '../../data/pageText';
import './translate.css';

class Translate extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.props.changeLanguage();

        if ( this.props.restartPage ){
            this.props.restartPage();
          }
    }
    render(){
        return(
            <button className='translate'
                onClick={this.handleChange }>
                { pageText.buttons.translate[ this.props.language ] }
            </button>
        )
    }
}

export default Translate;
