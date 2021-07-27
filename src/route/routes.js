import Home from '../page/home';
import Profile from '../page/profile';
import Login from '../page/login';

const routes = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/app',
    component: Home,
    exact: true,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
];

export default routes;
