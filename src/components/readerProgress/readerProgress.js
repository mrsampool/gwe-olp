import React from 'react';
import pageText from '../../data/pageText';

import './readerProgress.css';

class ReaderProgress extends React.Component{
    render(){
        return(
            <div className="ReaderProgress controlBox">
            
                <div className="pageCounter label">
        
                    <label htmlFor="pageInput">
                        { pageText.labels.page[this.props.language] } #:
                    </label>
                    <input type="number" 
                        id="pageInput" 
                        name="pageInput"
                        placeholder={this.props.page}
                        onChange={this.props.inputPage}
                        />
        
                    <label htmlFor="pageInput"
                        id="totalPages"
                        >/{this.props.totalPages}
                    </label>
                    
                </div>

                <div className="progressSliderWrap label">
                    <input type="range" 
                        min="1" 
                        max={this.props.totalPages}
                        value={this.props.page} 
                        id="progressSlider"
                        onChange={this.props.slidePage }
                    />
                </div>
        

    
            </div>
        )
    }
}

export default ReaderProgress;