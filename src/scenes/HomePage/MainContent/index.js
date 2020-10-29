import React, { useCallback, useEffect, useState } from 'react';
import MainContentScreen from './MainContentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../../redux/actions/Product.actions';
import * as CatActions from '../../../redux/actions/Category.actions';
import { setAppCookies } from '../../../util/cookieHandler';

import { getFilteredSorted } from '../../../redux/selections/Product.selections';
import { useCookies } from 'react-cookie';

const MainContent = (props) => {
  const [cookies, setCookie] = useCookies();
  const [open, setOpen] = useState(false);
  const onSearch = useCallback(
    (value) => {
      props.actions.updateSearch(value);
    },
    [props.actions]
  );
  const onDeleteChip = useCallback(
    (value) => {
      props.actions.deleteCats(value);
    },
    [props.actions]
  );
  const onAddCart = useCallback(
    (count, obj) => {
      setAppCookies(count, obj, cookies, setCookie);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    },
    [setCookie, cookies.Cart, setOpen]
  );

  const onSort = useCallback(
    (value) => {
      let sort = {};
      switch (value) {
        case 0:
          sort.name = 'Name';
          sort.asc = true;
          break;
        case 1:
          sort.name = 'Price';
          sort.asc = true;
          break;
        case 2:
          sort.name = 'Price';
          sort.asc = false;
          break;
        default:
          sort.name = 'Name';
          sort.asc = true;
          break;
      }
      props.actions.updateSort(sort);
    },
    [props.actions]
  );
  return (
    <MainContentScreen
      onAddCart={onAddCart}
      products={props.data}
      loading={props.loading}
      onSearch={onSearch}
      onSort={onSort}
      selectedCats={props.selCats}
      onDeleteCat={onDeleteChip}
      showToast={open}
    />
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions, ...CatActions }, dispatch),
});

const mapStateToProps = (state) => ({
  data: getFilteredSorted(state),
  loading: state.Products.loading,
  selCats: state.Category.selCats,
});

export default connect(mapStateToProps, mapDispatchtoProps)(MainContent);
