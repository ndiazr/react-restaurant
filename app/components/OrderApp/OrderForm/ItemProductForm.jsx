import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button';

class ItemProductForm extends Component {
  
  static propTypes = {
    idProduct: PropTypes.number.isRequired,
    descProduct: PropTypes.string.isRequired,
    cantProduct: PropTypes.number.isRequired,
  };

  state = {
    idProduct: undefined,
    descProduct: '',
    cantProduct: 0,
    totalProduct: 0,
  };

  handleChangeItem = () => {

  };

  render() {
    return (
      <div>
        <Button
          id="add"
          icon="add" floating accent mini
          onClick={this.handleChangeItem()}
        />
        <h1>{this.state.cant_product}</h1>
        <Button
          id="substract"
          icon="add" floating accent mini
          onClick={this.handleChangeItem()}
        />
        <h1>{this.state.total_product}</h1>
      </div>
    );
  }
}

export default ItemProductForm;
