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

                <TopNav/>

                <StartLearning/>

                <Mascot
                    character='polarbear'
                    type="splash"
                />

                

            </div>
        )
    }
}

export default Splash;
