import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '~/pages/Search';
import ResultsSearch from '~/pages/ResultsSearch';
import ProductDetail from '~/pages/ProductDetail';

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={Search} />
         <Route path="/items/aew" component={ResultsSearch} />
         <Route path="/items/:id" component={ProductDetail} />
      </Switch>
   );
}
