import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { createFetchVenuesExplore, createSetRecentSearch } from './actions';
import {
  makeSelectVenues,
  makeSelectWarning,
  makeSelectLoading,
  makeSelectIsSubmitted,
  makeSelectRecentSearches,
} from './selectors';

import Home from './Home';

const mapDispatchToProps = (dispatch) => ({
  setRecentSearch: (data) => dispatch(createSetRecentSearch(data)),
  fetchVenuesExplore: (data) => dispatch(createFetchVenuesExplore(data)),
});

const mapStateToProps = createStructuredSelector({
  venues: makeSelectVenues(),
  loading: makeSelectLoading(),
  warning: makeSelectWarning(),
  isSubmitted: makeSelectIsSubmitted(),
  recentSearches: makeSelectRecentSearches(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
