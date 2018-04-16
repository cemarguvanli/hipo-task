import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import {
  FETCH_VENUE_DETAIL,
  createFetchVenueDetailError,
  createFetchVenueDetailSuccess,
} from './actions';

export function* fetchVenueDetail({ payload }) {
  try {
    const result = yield call(request, `venues/${payload.id}`);
    yield put(createFetchVenueDetailSuccess(result.response));
  } catch (err) {
    yield put(createFetchVenueDetailError(err));
  }
}

export default function* watchVenueDetail() {
  yield takeLatest(FETCH_VENUE_DETAIL, fetchVenueDetail);
}
