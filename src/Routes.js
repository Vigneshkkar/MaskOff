import Age from './AgeVerification';
import Home from "./Home";

const routes = [
    {
      path: "/",
      exact: true,
      component: Age
    },
    {
        path: "/Home",
        component: Home
    }
  ];

export default routes;