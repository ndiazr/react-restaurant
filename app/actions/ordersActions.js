import assign from 'lodash/fp/assign';
import { endpoints } from '../constants';

export const receiveOrders = (orders) => (
  {
    type: 'RECEIVE_ORDERS',
    orders,
  }
);

export const refreshOrders = () => (
  {
    type: 'REFRESH_ORDERS',
  }
);

export const toggleOrdersLoading = () => ({
  type: 'TOGGLE_ORDERS_LOADING',
});

export function createOrder(orders) {
  // console.log(post);
  return (dispatch) => {
    dispatch(toggleOrdersLoading());
    return fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, orders)),
    })
    .then(response => {
      dispatch(toggleOrdersLoading());
      dispatch(refreshOrders());
      // dispatch(receiveCreatePost(response))
    });
  };
}

export function editOrder(order) {
  console.log(`Product recibido ${order}`);
  return (dispatch) => {
    dispatch(toggleOrdersLoading());
    //console.log(`${endpoints.posts}${post.id}`);
    return fetch(`${endpoints.orders}/${order.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, order)),
    })
    .then(response => {
      dispatch(toggleOrdersLoading());
      dispatch(refreshOrders());
      // dispatch(receiveCreatePost(response))
    });
  };
}


export function deleteOrder(id) {
  // console.log('actions');
  return (dispatch) => {
    dispatch(toggleOrdersLoading());
  //  console.log(`${endpoints.posts}/${id}`);
    return fetch(`${endpoints.posts}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      dispatch(toggleOrdersLoading());
      dispatch(refreshOrders());
    });
  };
}

export function fetchOrders() {
  return (dispatch) => {
    dispatch(toggleOrdersLoading());
    return fetch(`${endpoints.oredrs}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveOrders(json));
      dispatch(toggleOrdersLoading());
    });
  };
}
