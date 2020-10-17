// React
import React from 'react';

// Sub-Components
import { Link } from "react-router-dom";

// Page Text
import pageText from '../../data/pageText';

// Syle Sheet
import './startLearning.css';

class StartLearning extends React.Component{
    render(){
        return(
            <Link to="/library" id="startLink">
                <button id="startButton">
                    { pageText.buttons.startLearning[ this.props.language ] }
                    <div className="startArrow"/>
                </button>
            </Link>
        )
    }
}
export default StartLearning;