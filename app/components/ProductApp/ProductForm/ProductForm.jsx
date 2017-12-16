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
    active: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
  };
  static productState = () => fromJS({
    name: '',
    cost: '',
    sellCost: '',
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
  onSellCostChange = (value) =>{
    const productState = this.state.productState.set('sellCost',value);
    this.setState({productState});
  }

  componentWillReceiveProps(nextProps) {
    const { product } = nextProps;
    //console.log(post);
    this.setState({ productState: product  || ProductForm.productState()});
    // this.setState({ postState: nextProps.post || PostForm.postState() }),
  }
  handleCreateProduct = () => {
    const { createProduct } = this.props;
    // const post = Object.assign({}, this.state, { date: Date() });
    const product = this.state.productState;
    // console.log(post);
    this.setState({ productState: ProductForm.productState() }, () => createProduct(product));
    // createPost(post);
  };
  handleClose = () => {
    const { closeForm } = this.props;
    this.setState({ productState: ProductForm.productState()});
    closeForm();
  };
  render(){
      const { active, closeForm, product } = this.props;
      const actions = [
        { label: "Cancel", onClick: this.handleClose },
        {
          label: isNil(product) ? "Create" : "Update",
          onClick: isNil(product) ? this.handleCreateProduct : null// : this.handleEditPost,
        }
      ];
      return (
        <div>
          <Dialog
            actions={actions}
            active={active}
            onEscKeyDown={this.handleClose}
            onOverlayClick={this.handleClose}
            title='product'
          >
            <Input
              label="Name"
              onChange={this.onNameChange}
              value={this.state.productState.get('name')}
            />
            <Input
              label="Cost"
              onChange={this.onCostChange}
              value={this.state.productState.get('cost')}
            />
            <Input
              label="sell Cost"
              onChange={this.onSellCostChange}
              value={this.state.productState.get('cost')}
            />
          </Dialog>

        </div>
      );
  }

}

export default ProductForm;
