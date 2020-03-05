import { combineReducers } from 'redux';

import favorites from '~/store/modules/favorites/reducer';
import visits from '~/store/modules/visits/reducer';

export default combineReducers({
   favorites,
   visits,
});
