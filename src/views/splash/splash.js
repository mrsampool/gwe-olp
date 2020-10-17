import React from 'react';

// Sub-Components
import StartLearning from '../../components/startLearning/startLearning';
import TopNav from '../../components/topnav/topnav';
import Mascot from '../../components/mascot/mascot';

//Style Sheet
import './splash.css';


class Splash extends React.Component{
    render(){
        return(
            <div className='Splash'>

                <TopNav
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                />

                <StartLearning language={this.props.language} />

                <Mascot
                    character='polarbear'
                    type="splash"
                    language={this.props.language}
                />

                

            </div>
        )
    }
}

export default Splash;
