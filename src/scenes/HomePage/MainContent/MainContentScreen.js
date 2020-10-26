import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Header from '../../../components/Header';
import Skeleton from '@material-ui/lab/Skeleton';

import ProdCard from '../../../components/productCard';

const MainContentScreen = ({ products, loading }) => {
  return (
    <div className={styles.holder}>
      <Header />
      <div>{!loading ? <ProdCard /> : <Skeleton />}</div>
    </div>
  );
};

MainContentScreen.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MainContentScreen;
