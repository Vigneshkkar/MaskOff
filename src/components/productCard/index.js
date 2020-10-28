import React, { useState } from 'react';
import Card from '../card';
// import Prod1 from '../../assets/productImages/ProdImg1.png';
import styles from './index.module.scss';
import Counter from '../counter';
import AddCart from '@material-ui/icons/AddShoppingCartRounded';
import PropTypes from 'prop-types';

const ProdCard = ({ onAddCart, productObj }) => {
  const [count, setCount] = useState(1);
  return (
    <div className={styles.cardHolder}>
      {/* {productObj && ( */}
      <Card>
        <div className={styles.cardPicker}>
          <div className={styles.imageCont}>
            <img alt='' src={productObj.img} />
          </div>
          <span className={styles.title}>{productObj.Name}</span>
          <span className={styles.subTitle}>$ {productObj.Price}</span>
          <div className={styles.expandedCont}>
            <span className={styles.padding}>Description</span>
            <span className={styles.padding}>{productObj.Desc}</span>
          </div>
          <div className={styles.addCartCont}>
            <Counter count={count} setCount={setCount} />
            <div className={styles.addCartAnimate}>
              <Card button={true}>
                <div
                  onClick={() => onAddCart(count, productObj)}
                  className={styles.ButtonCont}>
                  <AddCart color='primary' />
                  <span>Add to Cart</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
      {/* )} */}
    </div>
  );
};

ProdCard.propType = {
  onAddCart: PropTypes.func.isRequired,
  productObj: PropTypes.object,
};
ProdCard.defaultProps = {
  productObj: {
    Name: '',
    img: '',
    Price: '',
    Desc: '',
  },
};

export default ProdCard;
