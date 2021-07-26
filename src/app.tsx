//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { Switch } from 'react-router-dom';
import ProtectedRoutes from './route/protectedRoute';
import routes from './route/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <ProtectedRoutes isAuthenticated routes={routes} />
      </Switch>
    </>
  );
}

export default App;
