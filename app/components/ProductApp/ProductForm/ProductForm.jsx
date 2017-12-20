import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { isNil } from 'lodash/fp';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';

class ProductForm extends Component{
  static propTypes = {
    product: ImmutablePropTypes.map,
    createProduct: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
    nameToEdit: PropTypes.string,
  };
  static productState = () => fromJS({
    name: '',
    cost: '',
    detail: '',
  });

  state = {
    productState: ProductForm.productState(),
  };
  onNameChange = (value) =>{
    const productState = this.state.productState.set('name',value);
    this.setState({productState});
  }
  onCostChange = (value) =>{
    const productState = this.state.productState.set('cost',value);
    this.setState({productState});
  }
  onDetailChange = (value) =>{
    const productState = this.state.productState.set('detail',value);
    this.setState({productState});
  }
  componentDidMount() {
    //const { nameToEdit } = this.state.nameToEdit;
    //console.log(`componentDidMount ${nameToEdit}`);
    //const productState = this.state.productState.set('nameToEdit',"esto");
    //fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    const { product } = nextProps;
    //console.log(`product nextProps ${ product }`);
    this.setState({ productState: product  || ProductForm.productState()});
    // this.setState({ postState: nextProps.post || PostForm.postState() }),
  }
  handleCreateProduct = () => {
    const { createProduct } = this.props;
    const product = this.state.productState;
    //console.log(product);
    this.setState(
      { productState: ProductForm.productState() },
     () => createProduct(product));


  };
  handleEditProduct = () => {
    console.log(`Entramos a handleEditProduct`);
    const { editProduct } = this.props;
    const { productState } = this.state;
    //console.log(this.state.postState);
    this.setState(
      {
          productState: ProductForm.productState(),
      },
      () => editProduct(productState),
    );
  };



  handleClose = () => {
    const { closeForm } = this.props;
    this.setState({ productState: ProductForm.productState()});
    closeForm();
  };


  render(){
      const { active, closeForm, product, nameToEdit } = this.props;
      //console.log("nameToEdit: "+nameToEdit);
      //console.log(`this.state.productState.get('name') ${this.state.productState.get('name')}`);
      const actions = [
        { label: "Cancel", onClick: this.handleClose },
        {
          label: isNil(product) ? "Create" : "Update",
          onClick: isNil(product) ? this.handleCreateProduct
                                  : this.handleEditProduct,
        },
      ];
      return (
        <div>
          <Dialog
            actions={actions}
            active={active}
            onEscKeyDown={this.handleClose}
            onOverlayClick={this.handleClose}
            title = {isNil(product) ?"Create Product"
                                    : `Edit ${nameToEdit}`//"Edit Product"
                    }
            //title='Create Product'
          >
            <Input
              label="Name"
              onChange={this.onNameChange}
              value={this.state.productState.get('name')}
            />
            <Input
              type = 'number'
              label="Cost"
              onChange={this.onCostChange}
              value={this.state.productState.get('cost')}
            />
            <Input
              type = 'text'
              label="Detail"
              onChange={this.onDetailChange}
              value={this.state.productState.get('detail')}
            />
          </Dialog>

        </div>
      );
  }

}

export default ProductForm;
