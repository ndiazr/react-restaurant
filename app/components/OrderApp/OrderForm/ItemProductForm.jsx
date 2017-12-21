import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button';
import styleItem from './styleItem.scss';

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
    if (e.target.id === 'add') {
      this.setState({
        cantProduct: this.state.cantProduct + 1,
      });
    } else if (e.target.id === 'substract' && this.state.cantProduct > 0) {
      this.setState({
        cantProduct: this.state.cantProduct - 1,
      });
    } else {
      this.setState({
        cantProduct: 0,
      });
    }
  }

  handleCantChanged(e) {
    if (e.target.id === 'cant') {
      this.setState({
        totalProduct: this.state.cantProduct * this.props.valUnit,
      });
    }
  }

  render() {
    return (
      <div className={styleItem.row}>
        <h2>{this.props.descProduct}</h2>
        <Button
          id="add"
          icon="add" floating accent mini
          onClick={this.handleChangeItem}
        />
        <h2 id="cant" onChange={this.handleCantChanged}> {this.state.cantProduct} </h2>
        <Button
          id="substract"
          icon="add" floating accent mini
          onClick={this.handleChangeItem}
        />
        <h2>{this.state.totalProduct}</h2>
      </div>
    );
  }
}

export default ItemProductForm;
