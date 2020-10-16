import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Translate from '../translate/translate';
import './topnav.css';

class TopNav extends React.Component{
    render(){
        return(
            <div className="TopNav">

                <div className="logo">
                    <Link to="/">
                        <img 
                            src={require('./Globe-Print-Logo-WEB.png') }
                            alt='GWE Logo'
                            id="logo"
                        />
                    </Link>
                </div>

                <div className="topNavButtons">
                    <a href="https://www.theglobalwarmingexpress.org/" id="homeLink" target="_blank">
                        <button>About GWE</button>
                    </a>
                </div>


            </div>
        )
    }
}

export default TopNav;