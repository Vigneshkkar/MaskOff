import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

const Card = ({children, circle}) => {
return <div className={"cardContainer " + (circle ? "circle" : '' )}>{children}</div>
}
Card.propTypes = {
    circle: PropTypes.bool
}
export default Card;