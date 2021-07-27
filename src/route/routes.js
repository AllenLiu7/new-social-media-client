import { RenderRoutes } from './RenderRoutes';

import Home from '../page/home';
import Profile from '../page/profile';
import Login from '../page/login';

const routes = [
  { path: '/', key: 'ROOT', exact: true, component: Login },
  {
    path: '/app',
    key: 'APP',
    component: RenderRoutes,
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: Home,
      },
      {
        path: '/app/profile',
        key: 'APP_PAGE',
        exact: true,
        component: Profile,
      },
    ],
  },
];

export default routes;
