import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import Arrow from '../../assets/icons/Counter.svg';
import styles from './index.module.scss';

const Incrementer = (count, setCount) => {
  setCount(count + 1);
};
const decrementer = (count, setCount) => {
  return count > 1 ? setCount(count - 1) : null;
};

const Counter = ({ count = 1, setCount }) => {
  // const [count, setCount] = useState(1);
  return (
    <Card>
      <div className={styles.cont}>
        <img
          onClick={() => Incrementer(count, setCount)}
          alt=''
          src={Arrow}></img>
        <span>{count}</span>
        <img
          onClick={() => decrementer(count, setCount)}
          className={styles.rot180}
          alt=''
          src={Arrow}></img>
      </div>
    </Card>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default Counter;
