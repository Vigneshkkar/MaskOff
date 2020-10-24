import Age from './scenes/AgeVerification';
import Home from "./scenes/Home";

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