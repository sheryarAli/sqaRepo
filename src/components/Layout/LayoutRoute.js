import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from 'bc-react-session';

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (

  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />


);

export default LayoutRoute;
