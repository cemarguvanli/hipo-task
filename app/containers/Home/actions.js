export const FETCH_VENUES_EXPLORE = 'FETCH_VENUES_EXPLORE';
export function createFetchVenuesExplore(payload) {
  return {
    type: FETCH_VENUES_EXPLORE,
    payload
  };
}

export const FETCH_VENUES_EXPLORE_ERROR = 'FETCH_VENUES_EXPLORE_ERROR';
export function createFetchVenuesExploreError(payload) {
  return {
    type: FETCH_VENUES_EXPLORE_ERROR,
    payload
  };
}

export const FETCH_VENUES_EXPLORE_SUCCESS = 'FETCH_VENUES_EXPLORE_SUCCESS';
export function createFetchVenuesExploreSuccess(payload) {
  return {
    type: FETCH_VENUES_EXPLORE_SUCCESS,
    payload
  };
}

export const SET_RECENT_SEARCH = 'SET_RECENT_SEARCH';
export function createSetRecentSearch(payload) {
  return {
    type: SET_RECENT_SEARCH,
    payload
  };
}
