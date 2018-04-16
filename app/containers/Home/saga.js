import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { setRecentSearch, getRecentSearches } from './utils';
import {
  FETCH_VENUES_EXPLORE,
  createFetchVenuesExploreError,
  createFetchVenuesExploreSuccess,

  createSetRecentSearch,
} from './actions';

export function* fetchVenues({ payload }) {
  const { params } = payload;
  yield call(setRecentSearch, {
    near: payload.params.near,
    query: payload.params.query,
    pretty: `${payload.params.query} in ${payload.params.near}`
  });

  try {
    const result = yield call(request, 'venues/explore', {
      params: {
        ...params,
        venuePhotos: 1,
      },
    });
    const recentSearches = yield call(getRecentSearches);
    yield put(createFetchVenuesExploreSuccess(result.response));
    yield put(createSetRecentSearch(recentSearches));
  } catch (err) {
    yield put(createFetchVenuesExploreError(err));
  }
}

export default function* watchVenues() {
  yield takeLatest(FETCH_VENUES_EXPLORE, fetchVenues);
}
