import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Card from '../../../components/card';
import { CircularProgress, Slider } from '@material-ui/core';

import Categories from '../../../components/categories';

const SideContentScreen = ({ cats, loading, onCatSelect }) => {
  const [value, setValue] = useState([20, 40]);
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
                onChange={(v, i) => setValue(i)}
                max={1000}
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
};

export default SideContentScreen;
