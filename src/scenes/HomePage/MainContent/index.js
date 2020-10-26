import React, { useEffect } from 'react';
import MainContentScreen from './MainContentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../../redux/actions/Product.actions';

const MainContent = (props) => {
  useEffect(() => {
    props.actions.getProductDetails();
  }, [props.actions]);
  return <MainContentScreen products={props.data} loading={props.loading} />;
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

const mapStateToProps = (state) => ({ ...state.Products });

export default connect(mapStateToProps, mapDispatchtoProps)(MainContent);
