import React from 'react';
import { Router } from 'react-router-dom';

import Header from '~/components/Header';
import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyle from '~/styles/globalStyles';

function App() {
   return (
      <Router history={history}>
         <Header />
         <GlobalStyle />
         <Routes />
      </Router>
   );
}

export default App;
