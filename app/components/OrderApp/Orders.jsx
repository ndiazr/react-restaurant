import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { findIndex, set } from 'lodash/fp';
import { fromJS, List } from 'immutable';
import Order from './Order/Order';
import OrderForm from './OrderForm/OrderForm';
import { Button } from 'react-toolbox/lib/button';

class Orders extends Component {

  static propTypes = {
    fetchOrders: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
    editOrder: PropTypes.func.isRequired,
    ordersData: ImmutablePropTypes.map.isRequired,
  };

  state = {
    showForm: false,
    orderToEdit: undefined,
  };

  componentDidMount() {
    const { fetchOrders } = this.fetchOrders;
    fetchOrders();
  }

  componentWillReceiveProps(nextProps) {
    const { fetchOrders } = this.fetchOrders;
    const { ordersData } = nextProps;
    if (!ordersData.get('ordersLoading') && ordersData.get('refresh')) {
      fetchOrders();
    }
  }

  handleCreateOrder = (order) => {

  };
  
  handleEditOrder = (order) => {

  };

  handleEditOrderForm = (id, order) => {

  };

  handleDeleteOrder = (id) => {

  };

  handleShowForm = () => {

  };

  handleCloseForm = () => {

  };

  render() {
    const orders = this.props.ordersData.get('orders');
    const orderItems = orders.map(order => (
      <Order
        key={order.get('_id')}
        id={order.get('_id')}
        order={order}
        editOrder={this.handleEditOrderForm}
        deleteOrder={this.handleDeleteOrder}
      />
    )).toJS();

    return (
      <div>
        {orderItems}
        <OrderForm
          active={this.state.showForm}
          closeForm={this.handleCloseForm}
          createOrder={this.handleCreateOrder}
          editOrder={this.handleEditOrder}
          order={this.state.orderToEdit}
        />
        <Button
          icon="add"
          label="Create Order"
          ocClick={this.handleShowForm}
        />
      </div>
    );
  }
}

export default Orders;
