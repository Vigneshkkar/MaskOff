import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({ children, circle, inset, button }) => {
  return (
    <div
      className={
        (inset ? 'cardContainerInset ' : 'cardContainer ') +
        (circle ? 'circle ' : '') +
        (button ? 'buttonCard' : '')
      }>
      {children}
    </div>
  );
};
Card.propTypes = {
  circle: PropTypes.bool,
  inset: PropTypes.bool,
  button: PropTypes.bool,
};
export default Card;
