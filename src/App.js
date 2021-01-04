import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Login from './components/Login';
import Chatroom from './components/Chatroom';

function App() {
  const [username, setUsername] = useState("Anon");

  return (
    <Router>
      <Route exact path='/' render={(props) => (
        <Login setUsername={setUsername}/>
      )} />
      <Route exact path='/chatroom' render={props => (
        <Chatroom username={username} />
      )} />
    </Router>
  );
}

export default App;
