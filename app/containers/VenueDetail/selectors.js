import { createSelector } from 'reselect';

const selectVenueDetail = (state) => state.venueDetail;

const makeSelectVenueDetail = () => createSelector(
  selectVenueDetail,
  (state) => state.venueDetail
);

const makeSelectLoading = () => createSelector(
  selectVenueDetail,
  (state) => state.isFetching
);

const makeSelectVenueTips = () => createSelector(
  selectVenueDetail,
  (state) => {
    const { groups } = state.venueDetail.tips;
    const items = groups && groups.length ? groups[0].items : [];
    return { items };
  }
);

const makeSelectVenuePhotos = () => createSelector(
  selectVenueDetail,
  (state) => {
    const { groups } = state.venueDetail.photos;
    const items = groups && groups.length ? groups[0].items : [];
    return { items };
  }
);

export {
  makeSelectLoading,
  makeSelectVenueTips,
  makeSelectVenueDetail,
  makeSelectVenuePhotos,
};
