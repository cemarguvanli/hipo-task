import {
  FETCH_VENUE_DETAIL,
  FETCH_VENUE_DETAIL_ERROR,
  FETCH_VENUE_DETAIL_SUCCESS,
} from './actions';

const initialState = {
  isFetching: false,
  venueDetail: {
    tips: {},
    photos: {},
  }
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VENUE_DETAIL:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_VENUE_DETAIL_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_VENUE_DETAIL_SUCCESS:
      return {
        ...state,
        venueDetail: {
          ...state.venueDetail,
          ...action.payload.venue,
        },
        isFetching: false,
      };
    default:
      return state;
  }
}

export default homeReducer;
