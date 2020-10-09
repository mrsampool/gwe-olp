import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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