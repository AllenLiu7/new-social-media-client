//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './page/home';
import Login from './page/login';
import Profile from './page/profile';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route
          path='/app'
          render={({ match: { path } }) => (
            <>
              <Route path={`${path}/`} component={Home} exact />
              <Route path={`${path}/profile`} component={Profile} />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
