import { createSelector } from 'reselect';

const selectVenues = (state) => state.home;

const normalizeVenues = (venues) => {
  const { groups } = venues;
  return groups && groups.length ? {
    items: [...groups[0].items],
  } : {};
};

const makeSelectVenues = () => createSelector(
  selectVenues,
  (state) => normalizeVenues(state.venues)
);

const makeSelectLoading = () => createSelector(
  selectVenues,
  (state) => state.isFetching
);

const makeSelectIsSubmitted = () => createSelector(
  selectVenues,
  (state) => state.isSubmitted
);
const makeSelectRecentSearches = () => createSelector(
  selectVenues,
  (state) => state.recentSearches
);

const makeSelectWarning = () => createSelector(
  selectVenues,
  (state) => ({
    text: state.venues.warning && state.venues.warning.text,
    totalResults: state.venues.totalResults
  }),
);

export {
  makeSelectVenues,
  makeSelectWarning,
  makeSelectLoading,
  makeSelectIsSubmitted,
  makeSelectRecentSearches,
};
