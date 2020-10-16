import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';

import TopNav from './components/topnav/topnav';
import Splash from './views/splash/splash';
import Translate from './components/translate/translate';
import Library from './views/library/library';
import Read from './views/read/read';


import Summary from './components/summary/summary';

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentBook: 'livingSunlight',
      currentPage: 1
    }
    this.changeBook = this.changeBook.bind(this);
    this.closeCurrent = this.closeCurrent.bind(this);
  }
  changeBook(event, book){
    this.setState( {currentBook: book} );
  }
  closeCurrent(){
    this.setState( {currentBook: '' } );
  }
  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">

            <Route exact path="/" 
              component={Splash}
            />

            <Route exact path="/library" 
              render={(props) =>(
                <Library {...props} 
                  currentBook={this.state.currentBook}
                  changeBook={this.changeBook}
                  closeCurrent={this.closeCurrent}
                  key={`Library - Current Book: ${this.state.currentBook}`}
                />
              )}
            />

            <Route exact path="/read" 
            render={(props) =>(
              <Read {...props}
                book={this.state.currentBook}
              />
            )}
            />

        </div>

      </Router>


      
        
        
    )
  }

}

export default App;
