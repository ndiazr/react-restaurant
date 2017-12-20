import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './Home/Home';
import Products from './ProductApp/container';
import Orders from './OrderApp/Orders';

import Contact from './Contact/Contact';
import PageNotFound from './PageNotFound/PageNotFound';

const App = ({ header }) => (
<Provider store={store}>
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/products/' exact component={Products} />
      <Route path='/orders/' exact component={Orders} />
      <Route path='/contact/' exact component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
</Provider>
);

export default App;
