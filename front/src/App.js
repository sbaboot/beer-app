import './App.css';
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DisplayBeerCards from './components/DisplayBeerCards';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route path="/beers" component={DisplayBeerCards} />
        <Route path="/" component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
