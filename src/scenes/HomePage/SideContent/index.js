import React, { useCallback } from 'react';
import SideContentScreen from './SideContentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CategoryActions from '../../../redux/actions/Category.actions';

const SideContent = (props) => {
  // console.log(props);

  const onCatSel = useCallback((value) => props.actions.updateSelCats(value), [
    props.actions,
  ]);
  return (
    <SideContentScreen
      onCatSelect={onCatSel}
      cats={props.data}
      loading={props.loading}
    />
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...CategoryActions }, dispatch),
});

const mapStateToProps = (state) => ({ ...state.Category });
export default connect(mapStateToProps, mapDispatchtoProps)(SideContent);
