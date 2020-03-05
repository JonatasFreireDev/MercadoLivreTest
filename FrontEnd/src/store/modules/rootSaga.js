import { all } from 'redux-saga/effects';

import favorites from './favorites/sagas';
import visits from './visits/sagas';

export default function* rootSaga() {
   return yield all([favorites, visits]);
}
