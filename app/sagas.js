import { fork, all } from 'redux-saga/effects';

import watchHome from './containers/Home/saga';
import watchVenueDetail from './containers/VenueDetail/saga';

export default function* rootSaga() {
  yield all([
    fork(watchHome),
    fork(watchVenueDetail),
  ]);
}
