import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './pages/home';
import Shop from './pages/shop';
import Auth from './pages/auth';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={Navbar} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </div>
  );
};

export default App;
