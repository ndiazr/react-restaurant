import { fromJS } from 'immutable';

import ACTION_TYPES from '../actions/actionTypes';

export const initialState = fromJS({
  products: [],
  totalResults: null,
  refresh: false,
  productsLoading: false,
});

export default function productsData(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_PRODUCTS: {
      //console.log(action.posts);
      //console.log(action.products);
      const totalResults = action.product.length;
      const products = fromJS(action.product).sort(p => p._id);
      return state.withMutations(map => {
        map.set('products', products)
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
