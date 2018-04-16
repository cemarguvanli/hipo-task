import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LOGO from 'assets/images/logo-white.svg';

import './style.scss';

const dummyPhoto = 'http://www.moderncafeminneapolis.com/images/slider/modern-cafe.jpg';

const getCoverPhoto = (item = {}) => {
  const coverPhoto = (item && `${item.prefix}1200${item.suffix}`) || dummyPhoto;
  return coverPhoto;
};

const Cover = ({ venue }) => {
  const coverPhoto = getCoverPhoto(venue.bestPhoto);
  return (
    <div className="venue-detail-cover" style={{ backgroundImage: `url(${coverPhoto})` }}>
      <div className="curtain" />
      <Link to="/" className="logo">
        <img src={LOGO} alt="Logo" />
      </Link>
      <div className="container">
        <h2>{venue.name}</h2>
      </div>
      <div className="venue-info">
        <div className="container">
          <div className="badges address">
            { venue.location && venue.location.formattedAddress.map((address) => (
              <span key={address}>{address}</span>
            )).reduce((prev, curr) => [prev, ' ', curr])}
          </div>
          <div className="badges phone">
            { venue.contact && venue.contact.formattedPhone}
          </div>
          <div className="rating-price-wrap">
            <span className="badges rating">{venue.ratingSignals}</span>
            <span className="badges price">
              { Array.from({
                length: (venue.price && venue.price.tier) || 0
              }, (v, i) => (<span key={String(i)} />)) }
            </span>
          </div>
          <div className="point">
            <span>{venue.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  venue: PropTypes.object,
};

export default Cover;
