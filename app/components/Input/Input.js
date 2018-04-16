import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = (props) => (
  <div className={`input-wrapper ${props.className}`}>
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
