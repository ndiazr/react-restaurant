import assign from 'lodash/fp/assign';
import { endpoints } from '../constants';

export const receiveProducts = (product) => (
  {
    type: 'RECEIVE_PRODUCTS',
    product,
  }
);

export const refreshProducts = () => (
  {
    type: 'REFRESH_PRODUCTS',
  }
);

export const toggleProductsLoading = () => ({
  type: 'TOGGLE_PRODUCTS_LOADING',
});

export function createProduct(product) {
  //console.log(post);
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    return fetch(`${endpoints.products }`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, product)),
    })
    .then(response => {
      dispatch(toggleProductsLoading())
      dispatch(refreshProducts())
      // dispatch(receiveCreatePost(response))
    });
  };
}

export function editProduct(product) {
  console.log(`Product recibido ${product}`);
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    //console.log(`${endpoints.posts}${post.id}`);
    return fetch(`${endpoints.products}/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, product)),
    })
    .then(response => {
      dispatch(toggleProductsLoading())
      dispatch(refreshProducts())
      // dispatch(receiveCreatePost(response))
    });
  };
}


export function deleteProduct(id){
  //console.log('actions');
  return (dispatch) => {
    dispatch(toggleProductsLoading());
  //  console.log(`${endpoints.posts}/${id}`);
    return fetch(`${endpoints.products}/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => {
      dispatch(toggleProductsLoading())
      dispatch(refreshProducts())
    })
  }
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    return fetch(`${endpoints.products}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveProducts(json));
      dispatch(toggleProductsLoading());
    });
  };
}
