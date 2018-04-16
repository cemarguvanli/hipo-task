export const FETCH_VENUE_DETAIL = 'FETCH_VENUE_DETAIL';
export function createFetchVenueDetail(payload) {
  return {
    type: FETCH_VENUE_DETAIL,
    payload,
  };
}

export const FETCH_VENUE_DETAIL_ERROR = 'FETCH_VENUE_DETAIL_ERROR';
export function createFetchVenueDetailError(payload) {
  return {
    type: FETCH_VENUE_DETAIL_ERROR,
    payload,
  };
}

export const FETCH_VENUE_DETAIL_SUCCESS = 'FETCH_VENUE_DETAIL_SUCCESS';
export function createFetchVenueDetailSuccess(payload) {
  return {
    type: FETCH_VENUE_DETAIL_SUCCESS,
    payload,
  };
}
