import React from 'react';
import styles from './index.module.scss';
import Badges from './Badges';
import Home from '@material-ui/icons/HomeRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import routes from './HomeRoute';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from '../../components/RouteSubRoutes';
import { useCookies } from 'react-cookie';
import Login from '../../components/Login';

import { Switch } from 'react-router-dom';

import LogoHolder from '../../assets/header.svg';
import Logo from '../../assets/logo.svg';

const HomeScreen = ({ cartValue, onNavigate, open, onClose, onOpenLogin }) => {
  const [cookies] = useCookies();
  return (
    <>
      <img alt='' className={styles.logoHolder} src={LogoHolder} />
      <div className={styles.globalHeader}>
        <div className={styles.holder}>
          <img alt='' className={styles.logo} src={Logo} />
        </div>
        <div className={styles.iconContainer}>
          <Badges onPress={() => onNavigate('/')} Icon={Home} label='Home' />
          <Badges
            badgeContent={cartValue}
            Icon={ShoppingCartIcon}
            label='Cart'
            onPress={() => onNavigate('/Cart')}
          />
          <Badges onPress={onOpenLogin} Icon={AccountCircle} label='Login' />
        </div>
      </div>
      <div className={styles.globalCont}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes cookies={cookies} key={i} {...route} />
          ))}
        </Switch>
      </div>
      <Login open={open} handleClose={onClose} />
    </>
  );
};

HomeScreen.propTypes = {
  cartValue: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenLogin: PropTypes.func.isRequired,
};

export default HomeScreen;
