import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/store/modules/rootReducer';
import rootSaga from '~/store/modules/rootSaga';
import persistReducers from '~/store/persistReducers';

const sagaMonitor =
   process.env.NODE_ENV === 'development'
      ? console.tron.createSagaMonitor()
      : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
   process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
      : applyMiddleware(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
