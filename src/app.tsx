//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { Switch } from 'react-router-dom';
import routes from './route';
import RouteWithSubRoutes from './utils/routeWithSubRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, userSelector } from './redux/slice/user';

function App() {
  const dispatch = useDispatch();
  const { user, loading, hasErrors } = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  console.log(user);

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

export default App;
