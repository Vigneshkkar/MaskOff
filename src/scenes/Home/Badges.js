import React from 'react';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Badges = ({ Icon, label, badgeContent, onPress }) => {
  return (
    <>
      <div onClick={onPress} className={styles.menuContainer}>
        <div>
          <Badge badgeContent={badgeContent} color='secondary'>
            <Icon style={{ fontSize: 30 }} color='primary' />
          </Badge>
        </div>
        <span className={styles.iconText}>{label}</span>
      </div>
    </>
  );
};
Badges.propTypes = {
  Icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  badgeContent: PropTypes.number,
  onPress: PropTypes.func,
};
export default Badges;
