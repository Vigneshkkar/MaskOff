import React from 'react';

import {
    Route,
    Redirect
  } from "react-router-dom";
const  RouteWithSubRoutes = route => {
    return (
      <Route
        path={route.path}
        exact={route.exact ? true : false}
        render={props => {
          // pass the sub-routes down to keep nesting
          return (route.cookies.ageVerify || route.notProtected) ? 
          <route.component {...props} routes={route.routes} /> : <Redirect path="/" />
        }
        }
      />
    );
  }

  export default RouteWithSubRoutes;