// React
import React from 'react';

// React Components
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

// Sub-Components
import Splash from './views/splash/splash';
import Library from './views/library/library';
import Read from './views/read/read';

// Style Sheet
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

            <Route path="/library/:bookLabel" 
              render={(props) =>(
                <Library {...props} 
                  currentBook={this.state.currentBook}
                  changeBook={this.changeBook}
                  closeCurrent={this.closeCurrent}
                  key={`Library - Current Book: ${this.state.currentBook}`}
                />
              )}
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

            <Route path="/read/:bookLabel" 
              render={(props) =>(
                <Read {...props}
                  book={this.state.currentBook}
                />
              )}
            />

            <Route exact path="/read">
              <Redirect to="/library" />
            </Route> 

            <Route exact path="/" 
              component={Splash}
            />

        </div>

      </Router>
    )
  }

}

export default App;
