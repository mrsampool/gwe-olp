import React from 'react';
import pageText from '../../data/pageText';

class AboutGWE extends React.Component{
    render(){
        return(
            <button className="splashAboutGWE">
                <a href="https://www.theglobalwarmingexpress.org/" 
                    id="homeLink" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    { pageText.buttons.aboutGWE[this.props.language] }
                </a>
            </button>
        )
    }
}

export default AboutGWE;