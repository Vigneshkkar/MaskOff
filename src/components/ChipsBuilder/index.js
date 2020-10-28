import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const Chips = ({ data, onDelete }) => {
  return (
    <>
      {data &&
        data.map((o, i) => (
          <Chip
            color='secondary'
            key={i}
            label={o}
            onDelete={() => onDelete(o)}
          />
        ))}
    </>
  );
};

Chips.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Chips;
