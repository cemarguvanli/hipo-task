import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import './style.scss';

const Tips = ({ tips, seeAllTips, onChange }) => (
  <div className="sidebar tips">
    <h3>tips</h3>
    <ul>
      { tips.items && tips.items
        .slice(0, seeAllTips ? tips.items.length : 3)
        .map((item) => (
          <li key={item.id}>
            { item.user && item.user.photo && (
              <img src={`${item.user.photo.prefix}50${item.user.photo.suffix}`} alt="user" />
            )}
            { item.user && (
              <div className="tip-detail">
                <span>{item.user.firstName} {item.user.lastName}</span>
                <p>{item.text}</p>
              </div>
            )}
          </li>
        ))}
    </ul>
    { !seeAllTips && (
      <Button
        type="link"
        onClick={() => {
          onChange({
            seeAllTips: true,
          });
        }}
      >
        All Tips
      </Button>
    )}
  </div>
);

Tips.propTypes = {
  tips: PropTypes.object,
  onChange: PropTypes.func,
  seeAllTips: PropTypes.bool,
};

export default Tips;
