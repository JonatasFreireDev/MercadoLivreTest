import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorMessage from '~/components/ErrorMessage';
import ProductDetail from '~/pages/ProductDetail';
import ResultsSearch from '~/pages/ResultsSearch';
import Search from '~/pages/Search';

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={Search} />
         <Route path="/items" exact component={ResultsSearch} />
         <Route path="/items/:id" component={ProductDetail} />
         <Route
            path="*"
            component={() => <ErrorMessage message="Está página não existe" />}
         />
      </Switch>
   );
}
