import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { addSuccessFavorite, removeFavorite } from './actions';

function* addReqFavorite({ payload }) {
   const { id } = payload;

   const productExists = yield select(state =>
      state.favorites.findIndex(p => p.id === id)
   );

   if (productExists >= 0) {
      yield put(removeFavorite(productExists));
   } else {
      const resp = yield call(api.get, `/items/${id}`);

      const { author, item } = resp.data;

      const product = {
         id,
         author,
         item,
      };

      yield put(addSuccessFavorite(product));
   }
}

export default all([
   takeLatest('@favorite/ADD_FAVORITE_REQUEST', addReqFavorite),
]);
