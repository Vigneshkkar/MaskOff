import React from 'react';

import Card from '../card';
import Arrow from '../../assets/icons/Counter.svg';
import styles from './index.module.scss';

const Counter = () => {
  return (
    <Card>
      <div className={styles.cont}>
        <img alt='' src={Arrow}></img>
        <span>1</span>
        <img className={styles.rot180} alt='' src={Arrow}></img>
      </div>
    </Card>
  );
};

export default Counter;
