import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
const Cats = ({ cats }) => {
  return cats.map((cat, i) => (
    <>
      <div key={cat.title + i} className={styles.Header}>
        <div className={styles.titileCont}>
          <img alt='' src={cat.icon} />
          <span className={styles.HeaderText}>{cat.title}</span>
        </div>
        {cat.subCat.map((subCat, j) => (
          <span
            key={cat.title + i + +subCat.title + j}
            className={styles.subCat}>
            {subCat.title}
          </span>
        ))}
      </div>
    </>
  ));
};

Cats.propTypes = {
  cats: PropTypes.array.isRequired,
};

export default Cats;
