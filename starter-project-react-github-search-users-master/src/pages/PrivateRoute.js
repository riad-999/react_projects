import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({children,...rest}) => {
  const {isAuthenticated,user} = useAuth0();

  return(
    <Route {...rest} render={() => {
      const isGood = isAuthenticated && user;
      return isGood ? children : <Redirect to="/login" />;
    }} />
  );
};
export default PrivateRoute;
