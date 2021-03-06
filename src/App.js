// React
import React from 'react';

// React Components
import {
  HashRouter as Router,
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
      currentPage: 1,
      language: 'eng'
    }
    this.changeBook = this.changeBook.bind(this);
    this.closeCurrent = this.closeCurrent.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeBook(event, book){
    this.setState( {currentBook: book} );
  }
  closeCurrent(){
    this.setState( {currentBook: '' } );
  }
  changeLanguage(){
    if ( this.state.language === 'eng' ){
      this.setState( { language: 'spa' } );
    } else if (this.state.language === 'spa' ){
      this.setState( { language: 'eng' } );
    }
  }
  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>

        <div className="App">

              {/* SPLASH PAGE */}

              <Route exact path="/" 
                render={ ( props ) =>(
                    
                      <Splash {...props}
                        language={this.state.language}
                        changeLanguage={this.changeLanguage}
                      />
                )}
              />

              {/* LIBRARY PAGE */}

              <Route path="/library/:bookLabel" 
                render={(props) =>(

                      <Library {...props} 
                        
                        closeCurrent={this.closeCurrent}
                        language={ this.state.language }
                        changeLanguage={ this.changeLanguage }
                      />
                )}
              />

              <Route exact path="/library" 
                render={(props) =>(

                      <Library {...props} 
                        currentBook={this.state.currentBook}
                        
                        language={this.state.language}
                        changeLanguage={ this.changeLanguage }
                      />
                )}
              />

              {/* READ PAGE */}

              <Route path="/read/:bookLabel" 
                render={(props) =>(
                  <Read {...props}
                    book={this.state.currentBook}
                    language={this.state.language}
                    changeLanguage={this.changeLanguage}
                  />
                )}
              />

              <Route exact path="/read">
                <Redirect to="/library" />
              </Route> 


          </div>
          
        </Router>
    )
  }
}

export default App;
