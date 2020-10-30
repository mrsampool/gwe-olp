// React
import React from 'react';

// Sub-Components
import Translate from '../translate/translate';
import NavHome from '../navHome';
import AboutGWE from '../aboutGWE/aboutGWE';

// Style Sheet
import './topnav.css';

class TopNav extends React.Component{
    getLogo(){
        return `${process.env.PUBLIC_URL}/assets/images/logos/GWElogo.png`;
    }
    render(){
        return(
            <div className={`TopNav ${this.props.type ? this.props.type : ''}`} id="topNav">
                
                <div className="logoWrap">
                    <img 
                        src={ this.getLogo() }
                        alt='GWE Logo'
                        id="logo"
                    />
                </div>

                <div className="topButtons">



                    <div className="navButtons">

                        <NavHome
                            language={ this.props.language }
                        />

                        <AboutGWE
                            language={this.props.language}
                        />

                    </div>

                    <Translate
                        language={ this.props.language }
                        changeLanguage={this.props.changeLanguage}
                    />

                </div>

            </div>
        )
    }
}

export default TopNav;