//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/slice/user';
import { fetchUserPosts } from './redux/slice/userPosts';
import { fetchFollowings } from './redux/slice/followings';

import Home from './page/home';
import Profile from './page/profile';
import Login from './page/login';
import SignUp from './page/signUp';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchFollowings());
    dispatch(fetchUserPosts());
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/app' component={Home} />
        <Route exact path='/app/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
