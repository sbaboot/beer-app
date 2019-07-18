import './App.css';
import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DisplayBeerCards from './components/DisplayBeerCards';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token') || '';
    this.state = {
      token
    };
    this.setToken = this.setToken.bind(this);
  }

  setToken(token) {
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    return (
      <div className="App">
        <NavBar />
        {
          token
            ? <DisplayBeerCards token={token} />
            : <SignIn setToken={this.setToken} />
        }
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          {/* <Route path="/beers" component={DisplayBeerCards} />
          <Route path="/" component={SignIn} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
