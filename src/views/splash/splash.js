import React from 'react';

// Sub-Components
import SplashNav from '../../components/splashNav/splashNav';
import SplashGraphics from '../../components/splashGraphics/splashGraphics';
import SplashLogo from '../../components/splashLogo/splashLogo';

//Style Sheet
import './splash.css';

class Splash extends React.Component{
    render(){
        return(
            <div className='Splash'>

                <SplashGraphics/>

                <SplashNav
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                />

                <SplashLogo/>

            </div>
        )
    }
}

export default Splash;