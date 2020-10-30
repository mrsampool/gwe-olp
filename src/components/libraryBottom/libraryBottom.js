import React from 'react';

// Style Sheet
import './libraryBottom.css';
import Mascot from '../mascot/mascot';

import libraryBGlandscapeBottom from './libraryBGlandscapeBottom.jpg';

class LibraryBottom extends React.Component{
    render(){
        return(
            <div className="libraryBottom">

                <div className="libraryBottomBG">
                    <img id="libraryBottom" src={libraryBGlandscapeBottom}/>
                </div>

                <Mascot
                    type="library"
                    character="penguin"
                    language={this.props.language}
                    id={'libraryPenguin'}
                    message={
                        this.props.currentBook ?
                        'summary'
                        : 'library'
                    }
                />
                    
            </div>
        )
    }
}
export default LibraryBottom;