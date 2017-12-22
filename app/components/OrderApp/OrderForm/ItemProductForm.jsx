import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button';
import styleItem from './styleItem.scss';

class ItemProductForm extends Component {

  static propTypes = {
    idProduct: PropTypes.number.isRequired,
    descProduct: PropTypes.string.isRequired,
    // cantProduct: PropTypes.number.isRequired,
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

  handleCantChanged() {
    this.setState({
      totalProduct: this.state.cantProduct * this.props.valUnit,
    });
  }

  render() {
    const { cantProduct } = this.state;
    const { valUnit } = this.props;
    const totalProduct = cantProduct * valUnit;

    return (
      <div className={styleItem.row}>
        <div className={styleItem.column}>
          <h2>{this.props.descProduct}</h2>
        </div>
        <div className={styleItem.column}>
          <Button
            id="substract"
            icon="remove" floating accent mini
            onClick={this.handleChangeItem}
          />
        </div>
        <div className={styleItem.column}>
          <h2 id="cant" onChange={this.handleCantChanged}> {this.state.cantProduct} </h2>
        </div>
        <div className={styleItem.column}>
          <Button
            id="add"
            icon="add" floating accent mini
            onClick={this.handleChangeItem}
          />
        </div>
        <div className={styleItem.column}>
          <h2>{ totalProduct }</h2>
        </div>
      </div>
    );
  }
}

export default ItemProductForm;
