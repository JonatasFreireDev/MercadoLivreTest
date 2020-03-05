import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { addSuccessVisit, updateVisitSuccess } from './actions';

function* addReqVisits({ payload }) {
   const { id } = payload;

   const productExists = yield select(state =>
      state.visits.find(p => p.id === id)
   );

   if (productExists) {
      const { visits } = productExists;
      yield put(updateVisitSuccess(productExists, visits + 1));
   } else {
      const resp = yield call(api.get, `/items/${id}`);

      const { author, item } = resp.data;
      const visits = 1;
      const product = {
         id,
         visits,
         author,
         item,
      };

      yield put(addSuccessVisit(product));
   }
}

export default all([takeLatest('@visits/ADD_VISITS_REQUEST', addReqVisits)]);
