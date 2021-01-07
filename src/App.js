import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Login from './components/Login';
const Chatroom = React.lazy(() => import('./components/Chatroom'));

function App() {
  const [username, setUsername] = useState("Anon");

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Route exact path='/react-messenger' render={(props) => (
          <Login setUsername={setUsername}/>
        )} />
        <Route exact path='/chatroom' render={props => (
          <Chatroom username={username} />
        )} />
      </Router>
    </React.Suspense>
  );
}

export default App;
