import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const classNames = {
  danger: 'danger',
  link: 'link'
};

const Button = (props) => (
  <div className={`button-wrapper ${classNames[props.type]}`}>
    <button onClick={props.onClick}>
      {Children.toArray(props.children)}
    </button>
  </div>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
