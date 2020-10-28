import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Header from '../../../components/Header';
import Chips from '../../../components/ChipsBuilder';

import Skeleton from '@material-ui/lab/Skeleton';

import ProdCard from '../../../components/productCard';

const NoData = () => (
  <>
    <span className={styles.NoDataText}>
      Search Criteria did not match any products...
    </span>
  </>
);

const MainContentScreen = ({
  products,
  loading,
  onAddCart,
  onSearch,
  onSort,
  selectedCats,
  onDeleteCat,
}) => {
  return (
    <div className={styles.holder}>
      <Header onSearch={onSearch} onSort={onSort} />
      {selectedCats && (
        <div className={styles.Chips}>
          <Chips onDelete={onDeleteCat} data={selectedCats} />{' '}
        </div>
      )}
      <div
        className={[
          styles.prodContainer,
          selectedCats.length > 0 ? styles.additionalSpace : '',
        ].join(' ')}>
        {!loading
          ? products &&
            products.length > 0 &&
            products.map((o, i) => (
              <ProdCard key={i} onAddCart={onAddCart} productObj={o} />
            ))
          : Array.from(Array(16).keys()).map((o, i) => (
              <Skeleton animation='wave' key={i}>
                <ProdCard />
              </Skeleton>
            ))}
        {!loading && products && products.length === 0 && <NoData />}
      </div>
    </div>
  );
};

MainContentScreen.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onAddCart: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedCats: PropTypes.array.isRequired,
  onDeleteCat: PropTypes.func.isRequired,
};

export default MainContentScreen;
