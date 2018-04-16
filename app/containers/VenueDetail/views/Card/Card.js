import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  item: { user, prefix, suffix }
}) => (
  <div className="photo-card-wrapper">
    <div className="photo-card">
      <img src={`${prefix}290${suffix}`} alt="Card" />
      <div className="photo-card-detail">
        <img src={`${user.photo.prefix}65${user.photo.suffix}`} alt="User" />
        <h4>{user.firstName} {user.lastName}</h4>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
