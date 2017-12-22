import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { isNil } from 'lodash/fp';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';
import ItemProductForm from './ItemProductForm';

class OrderForm extends Component {

  static propTypes = {
    order: ImmutablePropTypes.map,
    products: ImmutablePropTypes.list,
    createOrder: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
  };

  static orderState = () => fromJS({
    nameConsumer: '',
    productItems: [],
    totalOrder: 0,
  });

  state = {
    orderState: OrderForm.orderState(),
    productItemComponents: [],
  };

  componentWillReceiveProps(nextProps) {
    const { order } = nextProps;
    this.setState({ orderState: order || OrderForm.orderState() });
    // this.setState({ orderState: nextProps.order || orderForm.orderState() }),
    const { products } = this.props;
    const productItemComponents = products.map(item => (
      <ItemProductForm
        key={item.get('_id')}
        idProduct={item.get('_id')}
        descProduct={item.get('name')}
        valUnit={item.get('cost')}
      />
    ));
    this.setState({ productItemComponents });
  }

  onNameConsumerChange = (value) => {
    const orderState = this.state.orderState.set('nameConsumer', value);
    this.setState({ orderState });
  }

  onTotalOrderChange = (value) => {
    const orderState = this.state.orderState.set('totalOrder', value);
    this.setState({ orderState });
  }

  handleCreateOrder = () => {
    const { createOrder } = this.props;
    const order = this.state.orderState.set('date', Date());
    console.log(order);
    this.setState({ orderState: OrderForm.orderState() }, () => createOrder(order));
  };

  handleEditorder = () => {
    const { editOrder } = this.props;
    const { orderState } = this.state;

    this.setState(
      {
        orderState: OrderForm.orderState(),
      },
      () => editOrder(orderState),
    );
  };

  handleClose = () => {
    const { closeForm } = this.props;
    this.setState({ orderState: OrderForm.orderState() });
    closeForm();
  };

  render() {
    console.log();
    const { active, closeForm, order } = this.props;

    const actions = [
      { label: "Cancel", onClick: this.handleClose },
      {
        label: isNil(order) ? "Create" : "Update",
        onClick: isNil(order) ? this.handleCreateOrder : this.handleEditOrder,
      },
    ];
    return (
      <div>
        <Dialog
          actions={actions}
          active={active}
          onEscKeyDown={this.handleClose}
          onOverlayClick={this.handleClose}
          title='Orders'
        >
          <Input
            label="Name Consumer"
            onChange={this.onNameConsumerChange}
            value={this.state.orderState.get('name')}
          />
          {this.state.productItemComponents}
          <h1
            onChange={this.onTotalOrderChange}
          >{this.state.orderState.get('totalOrder')}</h1>
        </Dialog>
      </div>
    );
  }
}

export default OrderForm;
