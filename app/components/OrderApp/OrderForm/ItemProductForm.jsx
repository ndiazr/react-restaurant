import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button';

class ItemProductForm extends Component {
  
  static propTypes = {
    idProduct: PropTypes.number.isRequired,
    descProduct: PropTypes.string.isRequired,
    cantProduct: PropTypes.number.isRequired,
    valUnit: PropTypes.number.isRequired,
  };

  state = {
    cantProduct: 1,
    totalProduct: 0,
  };

  handleChangeItem = (e) => {
    if(e.target.id === 'add'){
      this.setState({
        cantProduct: this.state.cantProduct + 1
      });
    }else if(e.target.id === 'substract' && this.state.cantProduct > 0){
      this.setState({
        cantProduct: this.state.count - 1
      });
    }else {
      this.setState({
        cantProduct: 0
      });
    }
  };

  render() {
    return (
      <div>
        <Button
          id="add"
          icon="add" floating accent mini
          onClick={this.handleChangeItem}
        />
        <h1>{this.state.cantProduct}</h1>
        <Button
          id="substract"
          icon="add" floating accent mini
          onClick={this.handleChangeItem}
        />
        <h1>{this.state.totalProduct}</h1>
      </div>
    );
  }
}

export default ItemProductForm;
