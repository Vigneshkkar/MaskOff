import React, { useCallback, useEffect } from 'react';
import MainContentScreen from './MainContentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../../redux/actions/Product.actions';
import * as CatActions from '../../../redux/actions/Category.actions';

import { getFilteredSorted } from '../../../redux/selections/Product.selections';
import { useCookies } from 'react-cookie';

const MainContent = (props) => {
  const [cookies, setCookie] = useCookies();
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
      const year = new Date().getFullYear() + 1;
      const oneYear = new Date().setFullYear(year);
      let cartValue = [];
      if (cookies.Cart) {
        cartValue = JSON.parse(decodeURI(cookies.Cart));
        cartValue = cartValue.filter((o) => o.n !== obj.Name);
      }
      cartValue.push({ q: count, n: obj.Name });
      setCookie('Cart', encodeURI(JSON.stringify(cartValue)), {
        path: '/',
        expires: new Date(oneYear),
      });
    },
    [setCookie, cookies.Cart]
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
