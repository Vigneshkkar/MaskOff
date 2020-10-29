import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({ children, circle, inset, button, otherStyles }) => {
  return (
    <div
      className={
        (inset ? 'cardContainerInset ' : 'cardContainer ') +
        (circle ? 'circle ' : '') +
        (button ? 'buttonCard ' : '') +
        (otherStyles ? otherStyles : '')
      }>
      {children}
    </div>
  );
};
Card.propTypes = {
  circle: PropTypes.bool,
  inset: PropTypes.bool,
  button: PropTypes.bool,
  otherStyles: PropTypes.string,
};
export default Card;
