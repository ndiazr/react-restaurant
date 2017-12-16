import { combineReducers } from 'redux';
import productsData from './productsReducer';

const appReducer = combineReducers({
  productsData,
});

export default appReducer;
