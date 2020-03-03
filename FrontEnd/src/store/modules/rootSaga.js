import { all } from 'redux-saga/effects';

import favorites from './favorites/sagas';

export default function* rootSaga() {
   return yield all([favorites]);
}
