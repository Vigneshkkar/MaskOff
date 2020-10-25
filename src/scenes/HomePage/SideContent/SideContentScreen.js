import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styles from "./index.module.scss";
import Grid from '@material-ui/core/Grid';
import Card from "../../../components/card";

const SideContentScreen = () => {
 
  return (
    

      <div className={styles.holder}>
    <Card inset={true}>
      <div className={styles.Container}>
        <span className={styles.title}> Categories </span>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </Card>
      </div>
  );
};

SideContentScreen.propTypes = {
  
}

export default SideContentScreen;
