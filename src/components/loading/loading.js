import React from 'react';

// Style Sheet
import './loading.css'

// Icon
import loadIcon from './loadIcon.png';

class Loading extends React.Component{
    render(){
        return(
            <div id="loading"
                className={ 
                    this.props.loadedInitalPage &&
                    this.props.loadedInitialAudio &&
                    this.props.loadedReaderPhoto
                    ? 'loaded' 
                    : 'loading' }
            >

                <img 
                    src={loadIcon}
                    alt="loading"
                />

            </div>
        )
    }
}

export default Loading;