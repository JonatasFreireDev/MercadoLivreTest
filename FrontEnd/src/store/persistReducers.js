import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
   const persist = persistReducer(
      {
         key: 'mercadoL',
         storage,
         whitelist: ['favorites', 'visits'],
      },
      reducers
   );

   return persist;
};
