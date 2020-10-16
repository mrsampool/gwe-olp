// React
import React from 'react';

// Sub-Components
import { Link } from "react-router-dom";

// Syle Sheet
import './startLearning.css';

class StartLearning extends React.Component{
    render(){
        return(
            <Link to="/library" id="startLink">
                <button id="startButton">
                    Start Learning
                    <div className="startArrow"/>
                </button>
            </Link>
        )
    }
}
export default StartLearning;