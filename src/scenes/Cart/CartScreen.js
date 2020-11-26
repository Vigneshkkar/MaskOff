import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

import CartViewer from '../../components/CartViewer';
import Card from '../../components/card';
import { TextField } from '@material-ui/core';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import Skeleton from '@material-ui/lab/Skeleton';
import Toast from '../../components/Toast';
import Login from '../../components/Login';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const CartScreen = ({
  data,
  loading,
  count,
  onChangeCount,
  onDeleteItem,
  totalAmount,
  showToast,
  open,
  onOpenLogin,
  onClose,
  onCheckOpenLogin,
  ToastType,
  ToastMsg,
}) => {
  const [address, setAddress] = useState('');
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
      <div
        className={[
          styles.proceedCheckout,
          isMobile ? styles.mobileCheckout : '',
        ].join(' ')}>
        {/* <div>
          <span>Address to Deliver</span>
          <TextField
            label='Enter Delivery Address...'
            multiline
            size='medium'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth={true}
            rows={4}
            error={false}
            helperText={false && 'Please Enter Address to proceed.'}
            variant='filled'></TextField>
        </div> */}
        <div className={[styles.proceedCheck].join(' ')}>
          <div>
            <span>Total</span>
            <span>$ {totalAmount}</span>
          </div>
          <div onClick={() => onCheckOpenLogin(address)}>
            <Card button={true} otherStyles={styles.cardContainer}>
              <div className={styles.ButtonCont}>
                <ShoppingBasketRoundedIcon color='primary' />
                <span>Proceed to Checkout</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Toast msg={ToastMsg} type={ToastType} open={showToast} />
      <Login openLoginSetter={onOpenLogin} open={open} handleClose={onClose} />
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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenLogin: PropTypes.func.isRequired,
  onCheckOpenLogin: PropTypes.func.isRequired,
  ToastType: PropTypes.string,
  ToastMsg: PropTypes.string,
};
CartScreen.defaultProps = {
  ToastType: 'success',
  ToastMsg: 'Product removed from Cart.',
};

export default CartScreen;
