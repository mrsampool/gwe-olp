import React from 'react';

import './readerProgress.css';

class ReaderProgress extends React.Component{
    render(){
        return(
            <div className="ReaderProgress">
            
                <div className="pageCounter">
        
                    <label for="pageInput">Page #:</label>
                    <input type="number" 
                        id="pageInput" 
                        name="pageInput"
                        placeholder={this.props.page}
                        onChange={this.props.inputPage}
                        />
        
                    <label for="pageInput"
                        id="totalPages"
                        >/{this.props.totalPages}
                    </label>
                    
                </div>
        
                <input type="range" 
                    min="1" 
                    max={this.props.totalPages}
                    value={this.props.page} 
                    id="progressSlider"
                    onChange={this.props.slidePage }
                />
    
            </div>
        )
    }
}

export default ReaderProgress;