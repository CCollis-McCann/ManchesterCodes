import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import '../styles/App.css';

function App() {
  const [userID, setUserID] = useState('');

  const handleLogin = response => setUserID(response.userID);
  const handleLogout = () => window.FB.logout(() => setUserID(''));

  return (
    <div className="App">
      <Navbar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/addproperty" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
