import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Success from '../../assets/LoginImages/OrderSuccessful.png';
import Fail from '../../assets/LoginImages/OrderFailed.png';
import Card from '../../components/card';
import CannabisLeaf from '../../assets/icons/Weed.svg';
const OrderScreen = ({ success, onNavigate }) => {
  return (
    <>
      <div className={styles.imageHolder}>
        <img src={success ? Success : Fail} alt='' />
      </div>
      <div className={styles.msgText}>
        {success ? (
          <span>Hurray, Your Order is Confirmed.</span>
        ) : (
          <span> Oops, Some error occured please try again.</span>
        )}
      </div>
      <div className={styles.btnContainer}>
        <Card button={true}>
          <div onClick={onNavigate} className={styles.ButtonCont}>
            <img width={30} height={30} src={CannabisLeaf} alt='' />
            <span>Continue Shopping</span>
          </div>
        </Card>
      </div>
    </>
  );
};

OrderScreen.propTypes = {
  success: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default OrderScreen;
