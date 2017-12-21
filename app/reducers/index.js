import { combineReducers } from 'redux';
import productsData from './productsReducer';
import ordersData from './ordersReducer';

const appReducer = combineReducers({
  productsData,
  ordersData,
});

export default appReducer;
