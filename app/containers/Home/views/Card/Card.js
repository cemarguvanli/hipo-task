import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getFeaturedPhoto } from 'containers/Home/utils';

import './style.scss';

const Card = ({ venue }) => (
  <Link to={`/venue/${venue.id}`} className="card" key={venue.id}>
    <div
      className="card-inner"
      style={{ backgroundImage: `url(${getFeaturedPhoto(venue.featuredPhotos)})` }}
    >
      <div className="desc">
        <h2>{venue.name}</h2>
        <div className="badges rating">
          {venue.ratingSignals}
        </div>
        <div className="badges price">
          { Array.from({
            length: (venue.price && venue.price.tier) || 0
          }, (v, i) => (<span key={String(i)} />)) }
        </div>
        <div className="point">
          <span>{venue.rating}</span>
        </div>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  venue: PropTypes.object.isRequired,
};

export default Card;
