import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styles from "./index.module.scss";
import Grid from '@material-ui/core/Grid';
import SideContent from "./SideContent";
import MainContent from "./MainContent";

const HomePageScreen = () => {
 
  return (
    
      <div>
      <div className={styles.quoteContainer}>
        <span>“Struggle is the enemy, but weed is the remedy.”</span>
      </div>
      <Grid container justify="center" >
        <Grid item xs={4}>
         <SideContent />
        </Grid>
        <Grid item xs={8}>
          <MainContent />
        </Grid>
      </Grid>
      </div>
  );
};

HomePageScreen.propTypes = {
  
}

export default HomePageScreen;
