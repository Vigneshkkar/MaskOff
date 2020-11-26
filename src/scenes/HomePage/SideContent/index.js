import React, { useCallback } from 'react';
import SideContentScreen from './SideContentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CategoryActions from '../../../redux/actions/Category.actions';

const SideContent = (props) => {
  // console.log(props);

  const onCatSel = useCallback(
    (value) => {
      if (props.closeDrawer) props.closeDrawer();
      props.actions.updateSelCats(value);
    },
    [props.actions]
  );

  const onPriceRange = useCallback(
    (value) => props.actions.updatePrice(value),
    [props.actions]
  );
  return (
    <SideContentScreen
      onCatSelect={onCatSel}
      onChangePrice={onPriceRange}
      cats={props.data}
      loading={props.loading}
      priceRange={props.selPriceRange}
    />
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...CategoryActions }, dispatch),
});

const mapStateToProps = (state) => ({ ...state.Category });
export default connect(mapStateToProps, mapDispatchtoProps)(SideContent);
