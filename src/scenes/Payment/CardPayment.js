/**
 * Use the CSS tab above to style your Element's container.
 */
import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import styles from './index.module.scss';
import Card from '../../components/card';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize: '26px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#d1d4c9',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};

function CardSection() {
  return (
    <label>
      <div className={styles.paymentHeadings}> Card Details: </div>
      <Card>
        <div className={styles.cardCont}>
          <CardElement {...createOptions(30)} />
        </div>
      </Card>
      {/* <Card>
        <div className={[styles.inputComp, styles.cardName].join(' ')}>
          <input
            placeholder='Name on Card'
            className={styles.inputtransparent}></input>
        </div>
      </Card> */}
    </label>
  );
}

export default CardSection;
