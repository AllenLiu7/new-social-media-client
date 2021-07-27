import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

// export function RenderRoutes({ routes }) {
//   return (
//     <Switch>
//       {routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//     </Switch>
//   );
// }
