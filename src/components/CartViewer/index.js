import React, { useEffect, useState } from 'react';
import Card from '../card';
import styles from './index.module.scss';

import Counter from '../counter';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
const CartViewer = ({ cartItem, onDelete, onQuantChange }) => {
  console.log('cart viewer');
  const [count, setCount] = useState(cartItem.quantity);
  useEffect(() => {
    onQuantChange(count, cartItem.Name);
  }, [count]);
  return (
    <div>
      <Card>
        <div className={styles.cartViewHolder}>
          <img src={cartItem.img} alt='' />
          <span className={styles.ProdName}>{cartItem.Name}</span>
          <span className={styles.Price}>
            $ {cartItem.Price && cartItem.Price.toFixed(2)}
          </span>
          <div className={styles.counter}>
            <Counter count={count} setCount={setCount} />
          </div>
          <span className={styles.PriceTot}>
            $ {cartItem.Price && (count * cartItem.Price).toFixed(2)}
          </span>
          <div
            className={styles.Delete}
            onClick={() => onDelete(cartItem.Name)}>
            <DeleteForeverRoundedIcon
              style={{ fontSize: 50, color: red[400] }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

CartViewer.propTypes = {
  cartItem: PropTypes.object,
  onDelete: PropTypes.func,
  onQuantChange: PropTypes.func,
};

CartViewer.defaultProps = {
  cartItem: {
    img: '',
    Name: '',
    Price: 0,
    quantity: 0,
  },
  onQuantChange: () => null,
};

export default CartViewer;
