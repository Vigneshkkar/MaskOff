import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

const Card = ({children, circle, inset}) => {
return <div className={(inset ? "cardContainerInset " : "cardContainer ") + (circle ? "circle" : '' )}>{children}</div>
}
Card.propTypes = {
    circle: PropTypes.bool,
    inset: PropTypes.bool
}
export default Card;