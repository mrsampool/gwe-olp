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
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        if (screenHeight < 500){
            logo = GWEicon;
        } else {
            logo = GWElogo;
        }
        return(
            <div className="TopNav">

                <div className="logo">
                    <Link to="/">
                        <img 
                            src={ logo }
                            alt='GWE Logo'
                            id="logo"
                        />
                    </Link>
                </div>

                <Translate
                    language={ this.props.language }
                    changeLanguage={this.props.changeLanguage}
                />

                <div className="topNavButtons">
                    <a href="https://www.theglobalwarmingexpress.org/" id="homeLink" target="_blank">
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