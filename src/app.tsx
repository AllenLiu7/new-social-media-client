import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { Switch } from 'react-router-dom';
import routes from './route';
import RouteWithSubRoutes from './utils/routeWithSubRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  );
}

export default hot(App);
