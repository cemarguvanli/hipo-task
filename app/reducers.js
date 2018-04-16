import { combineReducers } from 'redux';

import home from 'containers/Home/reducer';
import venueDetail from 'containers/VenueDetail/reducer';

export default function createReducer() {
  return combineReducers({
    home,
    venueDetail,
  });
}
