import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Profile from './Profile';
import AppContext from './AppContext';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          image : "url/to/image",
          biography : "Lorem ipsum",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          image : "url/to/image",
          biography : "Lorem ipsum",
          id : 456
        }
      ]
    }
  }
  
  render(){

    const contextValues = {
      profiles : this.state.profiles
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextValues}>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Route path="/profile/:identifier" component={Profile} />
          {/* <Route path="/profile/:identifier&:id" render={ (props) => <Profile {...props} profiles={this.state.profiles}/> } /> */}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
