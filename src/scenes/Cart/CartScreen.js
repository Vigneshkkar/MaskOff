import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

import CartViewer from '../../components/CartViewer';
import Card from '../../components/card';
import { TextField } from '@material-ui/core';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import Skeleton from '@material-ui/lab/Skeleton';
import Toast from '../../components/Toast';

const CartScreen = ({
  data,
  loading,
  count,
  onChangeCount,
  onDeleteItem,
  totalAmount,
  showToast,
}) => {
  return (
    <>
      <div className={styles.cartTitle}>My Cart</div>
      <div className={styles.itemsContainer}>
        {!loading &&
          data.length > 0 &&
          data.map((o, i) => (
            <CartViewer
              onDelete={onDeleteItem}
              onQuantChange={onChangeCount}
              cartItem={o}
              key={i}
            />
          ))}
        {loading &&
          Array.from(Array(count).keys()).map((o, i) => (
            <Skeleton variant='rect' width='100%' key={i}>
              <CartViewer />
            </Skeleton>
          ))}
        {count === 0 && data.length === 0 && (
          <div className={styles.noItems}>
            <span>
              Oops no item in cart. Please add items from Home to Proceed.
            </span>
          </div>
        )}
      </div>
      <div className={styles.proceedCheckout}>
        <div>
          <span>Address to Deliver</span>
          <TextField
            label='Enter Delivery Address...'
            multiline
            size='medium'
            fullWidth={true}
            rows={4}
            error={false}
            helperText={false && 'Please Enter Address to proceed.'}
            variant='filled'></TextField>
        </div>
        <div className={styles.proceedCheck}>
          <div>
            <span>Total</span>
            <span>$ {totalAmount}</span>
          </div>
          <div>
            <Card button={true} otherStyles={styles.cardContainer}>
              <div className={styles.ButtonCont}>
                <ShoppingBasketRoundedIcon color='primary' />
                <span>Proceed to Checkout</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Toast msg='Product removed from Cart.' type='success' open={showToast} />
    </>
  );
};

CartScreen.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  onChangeCount: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  totalAmount: PropTypes.number.isRequired,
  showToast: PropTypes.bool.isRequired,
};

export default CartScreen;
