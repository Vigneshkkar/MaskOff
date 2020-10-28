import React, { useCallback, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCartItems } from '../../redux/selections/Cart.selections';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import * as CartActions from '../../redux/actions/Cart.actions';
import * as ProdActions from '../../redux/actions/Product.actions';
import * as CatActions from '../../redux/actions/Category.actions';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D1D4C9',
    },
    secondary: {
      main: '#4D7756',
    },
  },
  typography: {
    fontFamily: [
      'Baloo Thambi 2',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
    ].join(','),
  },
});

const Home = (props) => {
  const [cookies] = useCookies();
  const history = useHistory();
  useEffect(() => {
    props.actions.getProductDetails();
  }, []);
  useEffect(() => {
    props.actions.getCategoryDetails();
  }, [props.actions]);
  useEffect(() => {
    let cartValue = [];
    if (cookies.Cart) {
      cartValue = JSON.parse(decodeURI(cookies.Cart));
    }
    props.actions.addToCart(cartValue);
  }, [cookies.Cart, props.actions]);

  const onNavigate = useCallback(
    (navParam) => history.push('/Home' + navParam),
    [history]
  );
  return (
    <MuiThemeProvider theme={theme}>
      <HomeScreen onNavigate={onNavigate} cartValue={props.cartValue} />
    </MuiThemeProvider>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators(
    { ...CartActions, ...ProdActions, ...CatActions },
    dispatch
  ),
});

const mapStateToProps = (state) => ({
  cartValue: getCartItems(state),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
