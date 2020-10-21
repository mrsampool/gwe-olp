// React
import React from 'react';

// React Components
import {
    Link
  } from "react-router-dom";

// Data
import pageText from '../../data/pageText';

// Sub-Components
import Translate from '../translate/translate';

// Style Sheet
import './topnav.css';

// Images
import GWElogo from './GWElogo.png';
import GWEicon from './GWEicon.png';

class TopNav extends React.Component{
    render(){
        let logo;
        // const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        if (screenHeight < 500){
            logo = GWEicon;
        } else {
            logo = GWElogo;
        }
        
        return(
            <div className={`TopNav ${this.props.type ? this.props.type : ''}`} id="topNav">
                

                <div className="logo">
                    <Link to="/">
                        <img 
                            src={ GWElogo }
                            alt='GWE Logo'
                            id="logo"
                        />
                    </Link>
                </div>

                <div className="navButtons">

                    <Translate
                        language={ this.props.language }
                        changeLanguage={this.props.changeLanguage}
                    />
                    <a href="https://www.theglobalwarmingexpress.org/" 
                        id="homeLink" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button>
                            { pageText.buttons.aboutGWE[ this.props.language ] }
                        </button>
                    </a>

                </div>
            </div>
        )
    }
}

export default TopNav;