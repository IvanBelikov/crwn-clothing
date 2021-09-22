import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './pages/home';

const Hats = () => {
  return <h1>Hats Page</h1>;
};

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
