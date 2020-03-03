import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';

import Header from '~/components/Header';
import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyle from '~/styles/globalStyles';

import { store, persistor } from './store';

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router history={history}>
               <Header />
               <GlobalStyle />
               <Routes />
            </Router>
         </PersistGate>
      </Provider>
   );
}

export default App;
