import React from 'react';
import styles from './index.module.scss';

import LogoHolder from "../../assets/header.svg";
import Logo from "../../assets/logo.svg";

const HomeScreen = () => {
    return <>
    <img className={styles.logoHolder} src={LogoHolder} />
    <div className={styles.holder}>
    <img className={styles.logo} src={Logo} />
    </div>
    </>
}

export default HomeScreen;