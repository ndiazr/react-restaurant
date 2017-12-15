import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { findIndex, set } from 'lodash/fp';
import { fromJS, List } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
//import { endpoints } from '../../constants';

class Products extends Component{
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    productDate: ImmutablePropTypes.map.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };
state = {
  showForm: false,
};
// componentDidMount() {
//   const { fetchPosts } = this.props;
//   fetchPosts();
// }

// componentWillReceiveProps(nextProps) {
//   const { fetchPosts } = this.props;
//   const { postsData } = nextProps;
//   //console.log(postsData.get('postsLoading'), postsData.get('refresh'));
//   if (!postsData.get('postsLoading') && postsData.get('refresh')) {
//   //  console.log('¡Entró!');
//     fetchPosts();
//   }
// }

handleDeleteProduct = (id) =>{
  //console.log(`borrar ${id}`);
  const { deleteProduct } = this.props;
  //deletePost(post.toJS());
  deleteProduct(id);
}

createPost = (product) => {
  const { createProduct } = this.props;
  this.setState({ showForm: false }, () => createProduct(product.toJS()));
};




}
