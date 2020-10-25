import React from 'react';
import HomeScreen from "./HomeScreen";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#D1D4C9'
      },
      secondary:{
          main: '#4D7756'
      }
    }
  });

const Home = () => {
    return <MuiThemeProvider theme={theme}>
        
        <HomeScreen />
        </MuiThemeProvider>
}

export default Home;