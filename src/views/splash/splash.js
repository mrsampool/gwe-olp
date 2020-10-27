import React from 'react';

// Sub-Components
import StartLearning from '../../components/startLearning/startLearning';
import Mascot from '../../components/mascot/mascot';

//Style Sheet
import './splash.css';

import splashBG from './splashBG copy.jpg';
import TopNav from '../../components/topnav/topnav';

class Splash extends React.Component{
    render(){
        return(
            <div className='Splash'>
                
                <TopNav
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                />

                <div className="pageContent">

                    <div className="splashBG">
                        <img src={ splashBG } alt=''/>
                    </div>

                    <div className="splashElements">

                        <StartLearning language={this.props.language} />

                        <Mascot
                            character='polarbear'
                            type="splash"
                            language={this.props.language}
                        />

                    </div>

                </div>

            </div>
        )
    }
}

export default Splash;
