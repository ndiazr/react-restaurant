import { fromJS } from 'immutable';

import ACTION_TYPES from '../actions/actionTypes';

export const initialState = fromJS({
  Orders: [],
  totalResults: null,
  refresh: false,
  productsLoading: false,
});

export default function ordersData(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_PRODUCTS: {
      //console.log(action.posts);
      //console.log(action.products);
      const totalResults = action.posts.length;
      const orders = fromJS(action.orders).sort(p => p._id);
      return state.withMutations(map => {
        map.set('products', orders)
          .set('totalResults', totalResults)
          .set('refresh', false);
      });
    }
    case ACTION_TYPES.REFRESH_PRODUCTS:
      return state.set('refresh', true);
    case ACTION_TYPES.TOGGLE_PRODUCTS_LOADING:
      return state.set('productsLoading', !state.get('productsLoading'));
    case ACTION_TYPES.RESET_PRODUCTS:
      return initialState;
    default:
      return state;
  }
}