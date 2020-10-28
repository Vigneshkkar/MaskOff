import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Catagories = ({ cat, onSelect }) => (
  <>
    <div onClick={() => onSelect(cat.title)} className={styles.Header}>
      <div className={styles.titileCont}>
        <img alt='' src={cat.icon} />
        <span className={styles.HeaderText}>{cat.title}</span>
      </div>
      {cat.subCat &&
        cat.subCat.map((subCat, j) => (
          <span
            onClick={(e) => {
              onSelect(`${cat.title}-${subCat.title}`);
              e.stopPropagation();
            }}
            key={j}
            className={styles.subCat}>
            {subCat.title}
          </span>
        ))}
    </div>
  </>
);
const Cats = ({ cats, onSelect }) => {
  return cats.map((cat, i) => (
    <Catagories onSelect={onSelect} cat={cat} key={i} />
  ));
};

Cats.propTypes = {
  cats: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Cats;
