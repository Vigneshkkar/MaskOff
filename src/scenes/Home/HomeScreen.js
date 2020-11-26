import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Badges from './Badges';
import Home from '@material-ui/icons/HomeRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import routes from './HomeRoute';
import PropTypes from 'prop-types';
import RouteWithSubRoutes from '../../components/RouteSubRoutes';
import { useCookies } from 'react-cookie';
import Login from '../../components/Login';
import { clearAllCookies } from '../../util/cookieHandler';
import { Switch, useHistory } from 'react-router-dom';

import LogoHolder from '../../assets/header.svg';
import Logo from '../../assets/logo.svg';

import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Badge as StdBad,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0px',
    backgroundColor: '#152a38',
    width: '100%',
    boxShadow: '0px 12px 48px 0px black',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  selected: {
    // transform: 'scale(1.25)',
    color: '#d1d4c9',
  },
});
const HomeScreen = ({ cartValue, onNavigate, open, onClose, onOpenLogin }) => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [userLogin, setuserLogin] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const onLogOut = () => {
    clearAllCookies(removeCookies);
    history.push('/');
  };

  useEffect(() => {
    if (cookies.UserEmail) setuserLogin(true);
    else setuserLogin(false);
  }, [cookies]);

  return (
    <>
      <BrowserView>
        <img alt='' className={styles.logoHolder} src={LogoHolder} />
        <div className={styles.globalHeader}>
          <div className={styles.holder}>
            <img alt='' className={styles.logo} src={Logo} />
          </div>
          <div className={styles.iconContainer}>
            {userLogin && (
              <span className={styles.loggedinAs}>
                Logged in as : {cookies.UserEmail}
              </span>
            )}
            <Badges onPress={() => onNavigate('/')} Icon={Home} label='Home' />
            <Badges
              badgeContent={cartValue}
              Icon={ShoppingCartIcon}
              label='Cart'
              onPress={() => onNavigate('/Cart')}
            />
            {!userLogin && (
              <Badges
                onPress={onOpenLogin}
                Icon={AccountCircle}
                label='Login'
              />
            )}
            {userLogin && (
              <Badges
                onPress={onLogOut}
                Icon={ExitToAppRoundedIcon}
                label='Logout'
              />
            )}
          </div>
        </div>
      </BrowserView>

      <div className={isMobile ? styles.mobileCont : styles.globalCont}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes cookies={cookies} key={i} {...route} />
          ))}
        </Switch>
      </div>
      <MobileView className={styles.bottomNav}>
        <BottomNavigation
          classes={{
            root: classes.root,
          }}
          value='Home'
          onChange={(e, val) => {
            console.log(val);
            if (val === 'Login') {
              onOpenLogin();
              return;
            } else if (val === 'Logout') {
              onLogOut();
              return;
            } else {
              onNavigate('/' + val);
            }
          }}>
          <BottomNavigationAction
            classes={{
              iconOnly: classes.selected,
            }}
            label='Home'
            value=''
            icon={<Home />}
          />
          <BottomNavigationAction
            classes={{
              iconOnly: classes.selected,
            }}
            label='Cart'
            value='Cart'
            icon={
              <StdBad badgeContent={cartValue} color='secondary'>
                <ShoppingCartIcon style={{ fontSize: 25 }} color='primary' />
              </StdBad>
            }
          />
          {!userLogin && (
            <BottomNavigationAction
              classes={{
                iconOnly: classes.selected,
              }}
              label='Login'
              value='Login'
              icon={<AccountCircle />}
            />
          )}
          {userLogin && (
            <BottomNavigationAction
              classes={{
                iconOnly: classes.selected,
              }}
              label='Logout'
              value='Logout'
              icon={<ExitToAppRoundedIcon />}
            />
          )}
        </BottomNavigation>
      </MobileView>
      <Login openLoginSetter={onOpenLogin} open={open} handleClose={onClose} />
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
