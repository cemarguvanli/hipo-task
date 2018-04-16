import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const RecentSearches = ({ items, fetchVenuesExplore, onChange }) => (
  <div className="recent-search-list">
    <h3>Recent Searches</h3>
    <ul>
      { items.map((item) => (
        <li key={item.query + item.near}>
          <a // eslint-disable-line
            onClick={() => {
              const params = { near: item.near, query: item.query };
              onChange(params);
              fetchVenuesExplore({
                params,
              });
              window.scrollTo(0, 0);
            }}
          >
            {item.pretty}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

RecentSearches.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  fetchVenuesExplore: PropTypes.func,
};

export default RecentSearches;
