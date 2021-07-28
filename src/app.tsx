//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Home from './page/home';
import Profile from './page/profile';
import Login from './page/login';
import SignUp from './page/signUp';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.currentUser);
  useEffect();

  console.log(user);
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/app' component={Home} />
        <Route exact path='/app/profile/:username' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
