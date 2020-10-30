import React from 'react';

// Style Sheets
import './splashLogo.css';

class SplashLogo extends React.Component{
    getLogo(){
        return `${process.env.PUBLIC_URL}/assets/images/logos/GWElogo.png`;
    }
    render(){
        return(
            <div className="splashLogo">
                <img src={ this.getLogo() }/>
            </div>
        )
    }
}
export default SplashLogo;