import {
  SET_RECENT_SEARCH,

  FETCH_VENUES_EXPLORE,
  FETCH_VENUES_EXPLORE_ERROR,
  FETCH_VENUES_EXPLORE_SUCCESS,
} from './actions';

const initialState = {
  isFetching: false,
  isSubmitted: false,
  venues: {},
  recentSearches: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VENUES_EXPLORE:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_VENUES_EXPLORE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_VENUES_EXPLORE_SUCCESS:
      return {
        ...state,
        venues: action.payload,
        isFetching: false,
        isSubmitted: true,
      };

    case SET_RECENT_SEARCH:
      return {
        ...state,
        recentSearches: action.payload,
        isSubmitted: !!action.payload.length,
      };
    default:
      return state;
  }
}

export default homeReducer;
