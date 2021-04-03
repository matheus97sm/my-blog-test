import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginContext } from '../../LoginContext';

export function PrivateRoute({ component, ...rest }: any) {
  const { loggedUser } = useContext(LoginContext);

  return (
    <Route {...rest} render={(props: any) => (
      !!loggedUser ?
        React.createElement(component, props)
        : <Redirect to="/admin" />
    )} />
  );
}
