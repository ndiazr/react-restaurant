import assign from 'lodash/fp/assign';
import { endpoints } from '../constants';

export const receiveProducts = (posts) => (
  {
    type: 'RECEIVE_POSTS',
    posts,
  }
);

export const refreshProducts = () => (
  {
    type: 'REFRESH_POSTS',
  }
);

export const toggleProductsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});

export function createProducts(post) {
  //console.log(post);
  return (dispatch) => {
    dispatch(togglePostsLoading());
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

export function editProducts( Product ) {
  //console.log(`Post recibido ${post}`, post);
  return (dispatch) => {
    dispatch(toggleProductsLoading());
    //console.log(`${endpoints.posts}${post.id}`);
    return fetch(`${endpoints.Products}/${Product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, Product)),
    })
    .then(response => {
      dispatch(toggleProductsLoading())
      dispatch(refreshProducts())
      // dispatch(receiveCreatePost(response))
    });
  };
}


export function deleteProducts (id){
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
