/**
 * Use the CSS tab above to style your Element's container.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import Card from '../../components/card';
import { Grid } from '@material-ui/core';

const ShippingAddress = ({ email, getDetails, address, setAddress }) => {
  const [enable] = useState(!!email);

  return (
    <div>
      <div className={styles.paymentHeadings}> Shipping Details: </div>
      <div className={styles.detaisCont}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='stretch'
          spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <div className={styles.inputComp}>
                <input
                  onChange={(e) =>
                    setAddress({ ...address, email: e.target.value })
                  }
                  disabled={enable}
                  value={email}
                  placeholder='Email...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <div className={styles.inputComp}>
                <input
                  onChange={(e) =>
                    setAddress({ ...address, name: e.target.value })
                  }
                  placeholder='Name...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <div className={styles.inputComp}>
                <input
                  onChange={(e) =>
                    setAddress({ ...address, addressLine: e.target.value })
                  }
                  placeholder='Enter Address...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <div className={styles.inputComp}>
                <input
                  onChange={(e) =>
                    setAddress({ ...address, zipCode: e.target.value })
                  }
                  placeholder='ZipCode...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <div className={styles.inputComp}>
                <input
                  onChange={(e) =>
                    setAddress({ ...address, phonenumber: e.target.value })
                  }
                  placeholder='Phone Number...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

ShippingAddress.propTypes = {
  email: PropTypes.string,
  getDetails: PropTypes.func,
  address: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
};
export default ShippingAddress;
