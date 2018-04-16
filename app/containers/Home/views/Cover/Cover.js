import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';

import LOGO from 'assets/images/logo.svg';
import SEARCH_ICON from 'assets/images/icons/search.svg';

import './style.scss';

const Cover = ({
  onChange, onSubmit, near, query, isSubmitted, isFormValid
}) => (
  <div className={`search-form-wrapper ${isSubmitted ? 'submitted' : ''}`}>
    <div className="inner-wrapper">
      <Link to="/" className="logo">
        <img src={LOGO} alt="Logo" />
      </Link>
      <div className="info">
        <h1>Lorem ipsum dolor sit!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <form
        className="search-form"
        onSubmit={onSubmit}
      >
        <Input
          value={query}
          className="search-text"
          placeholder="I’m looking for"
          name="query"
          onChange={onChange}
        />
        <Input
          value={near}
          className="search-city"
          placeholder="Place"
          name="near"
          onChange={onChange}
        />
        <Button type="danger">
          <img src={SEARCH_ICON} alt="Search" />
        </Button>
        { !isFormValid && (
          <div className="error-message">
            Please make sure all fields are filled out properly
          </div>
        )}
      </form>
    </div>
  </div>
);

Cover.propTypes = {
  near: PropTypes.string,
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  isSubmitted: PropTypes.bool,
  isFormValid: PropTypes.bool,
};

export default Cover;
