import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import OrderScreen from './OrderScreen';

const Order = () => {
  let { status } = useParams();
  let history = useHistory();

  const onHome = () => history.push('/Home');
  const isSuccess = status === 'success' ? true : false;
  return <OrderScreen onNavigate={onHome} success={isSuccess} />;
};

export default Order;
