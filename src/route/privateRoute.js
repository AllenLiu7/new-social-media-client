import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { currentUserSelector } from '../redux/slice/loginUser';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useSelector(currentUserSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
