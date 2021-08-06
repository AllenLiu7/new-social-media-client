import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
