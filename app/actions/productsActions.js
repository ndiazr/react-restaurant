import assign from 'lodash/fp/assign';
import { endpoints } from '../constants';

export const receiveProducts = (posts) => (
  {
    type: 'RECEIVE_PRODUCTS',
    posts,
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

export function createProduct(post) {
  //console.log(post);
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    return fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, post)),
    })
    .then(response => {
      dispatch(toggleProductsLoading())
      dispatch(refreshProducts())
      // dispatch(receiveCreatePost(response))
    });
  };
}

export function editProduct( product ) {
  //console.log(`Post recibido ${product}`, post);
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    //console.log(`${endpoints.posts}${post.id}`);
    return fetch(`${endpoints.Posts}/${product.id}`, {
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


export function deleteProduct (id){
  console.log('actions');
  return (dispatch) => {
    dispatch(togglePostsLoading());
  //  console.log(`${endpoints.posts}/${id}`);
    return fetch(`${endpoints.posts}/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => {
      dispatch(togglePostsLoading())
      dispatch(refreshPosts())
    })
  }
}



export function fetchProducts() {
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    return fetch('http://localhost:3000/posts', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveProducts(json));
      dispatch(toggleProductsLoading());
    });
  };
}
