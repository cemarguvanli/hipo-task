import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';

import { getRecentSearches } from './utils';

import Card from './views/Card';
import Cover from './views/Cover';
import RecentSearches from './views/RecentSearches';

import './style.scss';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);

    this.state = {
      query: 'bar',
      near: 'istanbul',
      isFormValid: true
    };
  }

  componentDidMount() {
    this.props.setRecentSearch(getRecentSearches());
  }

  onSubmit(e) {
    e.preventDefault();
    const { near, query } = this.state;
    if (!near || !query) {
      return this.setState({ isFormValid: false });
    }
    this.setState({ isFormValid: true });
    return this.props.fetchVenuesExplore({
      params: {
        near,
        query,
        limit: 10,
      }
    });
  }

  onChange(value) {
    this.setState(value);
  }

  handleInputOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { near, query, isFormValid } = this.state;
    const {
      venues, warning, loading, isSubmitted, recentSearches, fetchVenuesExplore
    } = this.props;

    return (
      <div className="home-page">
        { loading && (
          <LoadingIndicator />
        )}
        <Cover
          near={near}
          query={query}
          isFormValid={isFormValid}
          onSubmit={this.onSubmit}
          isSubmitted={isSubmitted}
          onChange={this.handleInputOnChange}
        />
        { isSubmitted && (
          <div className="page-content">
            <div className="container">
              <div className="content">
                { isSubmitted && !venues.items && (
                  <span className="warning">Type or select from recent search list.</span>
                )}
                { isSubmitted && warning.totalResults === 0 && (
                  <span className="warning">{warning.text}</span>
                )}
                { venues.items && venues.items.map(({ venue }) => (
                  <Card key={venue.id} venue={venue} />
                ))}
              </div>
              <div className="sidebar">
                <RecentSearches
                  items={recentSearches}
                  onChange={this.onChange}
                  fetchVenuesExplore={fetchVenuesExplore}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  warning: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  venues: PropTypes.object.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  recentSearches: PropTypes.array.isRequired,
  setRecentSearch: PropTypes.func.isRequired,
  fetchVenuesExplore: PropTypes.func.isRequired,
};
