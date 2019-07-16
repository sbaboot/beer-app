import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to beer app</h1>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
