import Age from './scenes/AgeVerification';
import Home from "./scenes/Home";
import NoAuth from "./scenes/NoAuth";

const routes = [
    {
      path: "/",
      exact: true,
      component: Age,
      notProtected: true,
    },
    {
        path: "/Home",
        component: Home
    },
    {
      path: "/NoAuth",
      component: NoAuth,
      notProtected: true,
  }
  ];

export default routes;