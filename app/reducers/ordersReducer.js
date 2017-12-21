import { fromJS } from 'immutable';

import ACTION_TYPES from '../actions/actionTypes';

export const initialState = fromJS({
  orders: [],
  totalResults: null,
  refresh: false,
  productsLoading: false,
});

export default function ordersData(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_ORDERS: {
      // console.log(action.orders);
      // console.log(action.products);
      const totalResults = action.orders.length;
      const orders = fromJS(action.orders);
      return state.withMutations(map => {
        map.set('orders', orders)
          .set('totalResults', totalResults)
          .set('refresh', false);
      });
    }
    case ACTION_TYPES.REFRESH_ORDERS:
      return state.set('refresh', true);
    case ACTION_TYPES.TOGGLE_ORDERS_LOADING:
      return state.set('ordersLoading', !state.get('ordersLoading'));
    case ACTION_TYPES.RESET_ORDERS:
      return initialState;
    default:
      return state;
  }
}
