import React from 'react';
import Card from '../card';
import Prod1 from '../../assets/productImages/ProdImg1.png';
import styles from './index.module.scss';
import Counter from '../counter';
import AddCart from '@material-ui/icons/AddShoppingCartRounded';

const ProdCard = () => {
  return (
    <div className={styles.cardHolder}>
      <Card>
        <div className={styles.cardPicker}>
          <div className={styles.imageCont}>
            <img alt='' src={Prod1} />
          </div>
          <span className={styles.title}>Blue God</span>
          <span className={styles.subTitle}>$ 120.00</span>
          <div className={styles.expandedCont}>
            <span className={styles.padding}>Description</span>
            <span className={styles.padding}>
              Max two line aboiut the product
            </span>
          </div>
          <div className={styles.addCartCont}>
            <Counter />
            <div className={styles.addCartAnimate}>
              <Card button={true}>
                <div className={styles.ButtonCont}>
                  <AddCart color='primary' />
                  <span>Add to Cart</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProdCard;
