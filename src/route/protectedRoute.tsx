import { Redirect, RouteProps } from 'react-router';
import RouteWithSubRoutes from './routeWithSubRoutes';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  routes: any;
} & RouteProps;

export default function ProtectedRoute({
  isAuthenticated,
  routes,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
  } else {
    return <Redirect to='/login' />;
  }
}
