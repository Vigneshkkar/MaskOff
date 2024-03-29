import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Card from '../../../components/card';
import { CircularProgress, Slider } from '@material-ui/core';

import Categories from '../../../components/categories';

const SideContentScreen = ({
  cats,
  loading,
  onCatSelect,
  onChangePrice,
  priceRange,
}) => {
  const [value, setValue] = useState([0, 999]);
  return (
    <div className={styles.holder}>
      <Card inset={true}>
        <div className={styles.Container}>
          <div className={styles.title}> Categories </div>
        </div>
        <div>
          {loading ? (
            <div className={styles.spinner}>
              <CircularProgress />
            </div>
          ) : (
            cats && <Categories onSelect={onCatSelect} cats={cats} />
          )}
        </div>
        {!loading && (
          <>
            <div className={styles.Container}>
              <span className={styles.title}> Price </span>
            </div>
            <div className={styles.sliderCont}>
              <Slider
                value={value}
                onChange={(v, i) => {
                  setValue(i);
                  onChangePrice(i);
                }}
                min={10}
                max={999}
                valueLabelDisplay='auto'
                valueLabelFormat={(x) => '$ ' + x}
              />
              <span className={styles.subCat}>
                Price: ${value[0]} to ${value[1]}
              </span>
              <span></span>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

SideContentScreen.propTypes = {
  onCatSelect: PropTypes.func.isRequired,
  onChangePrice: PropTypes.func.isRequired,
  priceRange: PropTypes.array,
};

export default SideContentScreen;
