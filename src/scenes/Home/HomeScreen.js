import React from 'react';
import styles from './index.module.scss';
import Badges from './Badges'
import Home from '@material-ui/icons/HomeRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import routes from './HomeRoute'
import RouteWithSubRoutes from "../../components/RouteSubRoutes";
import { useCookies } from "react-cookie";

import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import LogoHolder from "../../assets/header.svg";
import Logo from "../../assets/logo.svg";

const HomeScreen = () => {
    const [cookies] = useCookies();
    return <>
    <img alt='' className={styles.logoHolder} src={LogoHolder} />
    <div className={styles.holder}>
    <img alt='' className={styles.logo} src={Logo} />
    </div>
    <div className={styles.iconContainer} >
        <Badges onPress={() => console.log('Home')} Icon={Home} label="Home"/>
        <Badges badgeContent={3} Icon={ShoppingCartIcon} label="Cart"/>
        <Badges Icon={AccountCircle} label="Login"/>
        </div>
   <div>
   <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes cookies={cookies} key={i} {...route} />
          ))}
        </Switch>
    </Router>
   </div>
    </>
}

export default HomeScreen;