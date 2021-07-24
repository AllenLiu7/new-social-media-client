import Home from '../page/home';
import Profile from '../page/profile';
import Login from '../page/login';

const routes = [
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;
