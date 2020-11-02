import React, { useCallback, useEffect, useState } from 'react';
import CartScreen from './CartScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  mapCartToProducts,
  getCartItems,
  getTotalAmount,
} from '../../redux/selections/Cart.selections';
import { useCookies } from 'react-cookie';
// import { useHistory } from 'react-router-dom';
import * as CartActions from '../../redux/actions/Cart.actions';
import { setAppCookies, setAppCookiesDirect } from '../../util/cookieHandler';

const Cart = (props) => {
  const [cookies, setCookie] = useCookies();
  const [open, setOpen] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const onClose = () => setOpenLogin(false);
  const onOpenLogin = () => setOpenLogin(true);

  const onCheckOpenLogin = () => {
    onOpenLogin();
  };

  const onChangeCount = useCallback(
    (count, obj) => setAppCookies(count, { Name: obj }, cookies, setCookie),
    [setCookie, cookies]
  );
  const onDeleteItem = useCallback(
    (name) => {
      props.actions.deleteCart(name);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    },
    [props.actions]
  );

  useEffect(() => {
    setAppCookiesDirect(props.selCart, setCookie);
  }, [props.selCart]);
  return (
    <CartScreen
      onChangeCount={onChangeCount}
      onDeleteItem={onDeleteItem}
      data={props.data}
      loading={props.loading}
      count={props.count}
      totalAmount={props.totalAmount}
      showToast={open}
      open={openLogin}
      onClose={onClose}
      onOpenLogin={onOpenLogin}
      onCheckOpenLogin={onCheckOpenLogin}
    />
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...CartActions }, dispatch),
});

const mapStateToProps = (state) => ({
  data: mapCartToProducts(state),
  selCart: state.Cart.selCart,
  loading: state.Products.loading,
  count: getCartItems(state),
  totalAmount: getTotalAmount(state),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);
