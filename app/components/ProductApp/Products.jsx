import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { findIndex, set } from 'lodash/fp';
import { fromJS, List } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Product from './Product/Product';
import ProductForm from './ProductForm/ProductForm';
import { endpoints } from '../../constants';

class Products extends Component{
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    productsData: ImmutablePropTypes.map.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };
state = {
  showForm: false,
  productToEdit: undefined,
  nameToEdit: undefined,
};

 componentDidMount() {
   const { fetchProducts } = this.props;
   fetchProducts();
}

componentWillReceiveProps(nextProps) {
  const { fetchProducts } = this.props;
  const { productsData } = nextProps;
  //console.log(postsData.get('postsLoading'), postsData.get('refresh'));
  if (!productsData.get('productLoading') && productsData.get('refresh')) {
  //  console.log('¡Entró!');
    fetchProducts();
  }
}

handleDeleteProduct = (id) =>{
  console.log(`borrar ${id}`);
  const { deleteProduct } = this.props;
  //deletePost(post.toJS());
  deleteProduct(id);
}

createProduct = (product) => {
  const { createProduct } = this.props;
  this.setState({ showForm: false },
    () => createProduct(product.toJS()));
};

handleEditProduct = (product) => {
  //console.log('editProduct');
  const {editProduct} = this.props;
  this.setState({ showForm: false ,
                  productToEdit: undefined,
                  nameToEdit: undefined,
                },
    () => editProduct(product.toJS()))
}

handleEditProductForm = (id, product) => {
  //console.log('editProductForm '+ product.get('name');
  this.setState({
    showForm: true,
    productToEdit: product
      .set('id', id),
    nameToEdit: product.get('name'),
    //  .set('updated_at'),
  });
};
handleShowForm = () => {
  this.setState({ showForm: true });
};
handleCloseForm = () => {
  //console.log("handleCloseForm");
  this.setState({ showForm: false, productToEdit: undefined });
};

render() {
  //console.log(this.props.productsData.get('products'));
  const nameToEdit = this.props.productsData.get('name');
  const products = this.props.productsData.get('products');
  const productItems = products.map(
    product => (
      <Product
        key={product.get('_id')}
        id={product.get('_id')}
        product={product}
        editProduct={this.handleEditProductForm}
        deleteProduct={this.handleDeleteProduct}
      />
    )
  ).toJS();
  return (
    <div>
      {productItems}
      <ProductForm
        active={this.state.showForm}
        createProduct={this.createProduct}
        editProduct={this.handleEditProduct}
        closeForm={this.handleCloseForm}
        product={this.state.productToEdit}
        nameToEdit={this.state.nameToEdit}
      />
      <Button
        icon="add" floating accent mini
      //    label="Create Product "
        onClick={this.handleShowForm}
      />
    </div>
  );
}
}
export default Products;
