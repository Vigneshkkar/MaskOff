import React, { useEffect } from 'react';
import SideContentScreen from './SideContentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CategoryActions from '../../../redux/actions/Category.actions';

const SideContent = (props) => {
  useEffect(() => {
    props.actions.getCategoryDetails();
  }, [props.actions]);
  return <SideContentScreen cats={props.data} loading={props.loading} />;
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...CategoryActions }, dispatch),
});

const mapStateToProps = (state) => ({ ...state.Category });
export default connect(mapStateToProps, mapDispatchtoProps)(SideContent);
