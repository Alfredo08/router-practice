import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Profile from './Profile';

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
    return (
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/profile"> Profile </Link>
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/profile/:identifier&:id" render={ (props) => <Profile {...props} profiles={this.state.profiles}/> } />
      </BrowserRouter>
    );
  }
}

export default App;
