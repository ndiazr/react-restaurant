import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Product from './ProductApp/Products';
import Order from './OrderApp/Orders';
import Contact from './Contact/Contact';
import PageNotFound from './PageNotFound/PageNotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/products/' exact component={Product} />
      <Route path='/orders/' exact component={Order} />
      <Route path='/contact/' exact component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
