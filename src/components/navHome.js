import React from 'react';
import { Link } from 'react-router-dom';

// Style Sheet
import './navHome.css'

// Data
import pageText from '../data/pageText';

class NavHome extends React.Component{
    render(){
        return(
            <Link to='/'>
                <button>
                    { pageText.buttons.home[this.props.language] }
                </button>
            </Link>
        )
    }
}
export default NavHome;