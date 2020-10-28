import React from 'react';

// Sub-Components
import StartLearning from '../startLearning/startLearning';
import Translate from '../translate/translate';

// Style Sheet
import './splashNav.css';

class SplashNav extends React.Component{
    render(){
        return(
            <div className="splashNav">

                <StartLearning
                    language={this.props.language}
                />

                <Translate
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                />


                <button className="splashAboutGWE">
                    <a href="https://www.theglobalwarmingexpress.org/" 
                        id="homeLink" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About GWE
                    </a>
                </button>


            </div>
            
        )
    }
}

export default SplashNav;