import React from 'react';
import './App.scss';
import routes from './Routes';
import { useCookies } from "react-cookie";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  const [cookies] = useCookies();
  return (
    <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes cookies={cookies} key={i} {...route} />
          ))}
        </Switch>
    </Router>
  );
}

const  RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact ? true : false}
      render={props => {
        console.log(route.cookies.ageVerify)
        // pass the sub-routes down to keep nesting
        return (route.cookies.ageVerify || route.notProtected) ? 
        <route.component {...props} routes={route.routes} /> : <Redirect path="/" />
      }
      }
    />
  );
}

export default App;
