import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { createFetchVenueDetail } from './actions';
import {
  makeSelectLoading,
  makeSelectVenueTips,
  makeSelectVenueDetail,
  makeSelectVenuePhotos,
} from './selectors';

import VenueDetail from './VenueDetail';

const mapDispatchToProps = (dispatch) => ({
  fetchVenueDetail: (data) => dispatch(createFetchVenueDetail(data)),
});

const mapStateToProps = createStructuredSelector({
  tips: makeSelectVenueTips(),
  loading: makeSelectLoading(),
  venue: makeSelectVenueDetail(),
  photos: makeSelectVenuePhotos(),
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueDetail);
