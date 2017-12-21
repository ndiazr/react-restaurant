import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { findIndex, set } from 'lodash/fp';
import { fromJS, List } from 'immutable';
import Order from './Order/Order';
import OrderForm from './OrderForm/OrderForm';
import { Button } from 'react-toolbox/lib/button';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Orders extends Component {

  static propTypes = {
    fetchOrders: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
    editOrder: PropTypes.func.isRequired,
    ordersData: ImmutablePropTypes.map.isRequired,
    productsData: ImmutablePropTypes.map.isRequired,
  };

  state = {
    showForm: false,
    orderToEdit: undefined,
  };

  async componentDidMount() {
    const { fetchOrders, fetchProducts } = this.props;
    await fetchOrders();
    await fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { fetchOrders } = this.fetchOrders;
    const { ordersData } = nextProps;
    if (!ordersData.get('ordersLoading') && ordersData.get('refresh')) {
      fetchOrders();
    }
  }

  handleCreateOrder = (order) => {
    const { createOrder } = this.props;
    this.setState({ showForm: false }, () => createOrder(order.toJS()));
  };

  handleEditOrder = (order) => {
    const { editOrder } = this.props;
    this.setState({ showForm: false }, () => editOrder(order.toJS()));
  };

  handleEditOrderForm = (id, order) => {
    this.setState({
      showForm: true,
      orderToEdit: order
        .set('id', id)
        .set('updated_at', Date()),
    });
  };

  handleDeleteOrder = (id) => {
    const { deleteOrder } = this.props;
    deleteOrder(id);
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCloseForm = () => {
    this.setState({ showForm: false, postToEdit: undefined });
  };

  render() {
    const orders = this.props.ordersData.get('orders');
    const products = this.props.productsData.get('products');
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
        <Nav />
        {orderItems}
        <OrderForm
          active={this.state.showForm}
          closeForm={this.handleCloseForm}
          createOrder={this.handleCreateOrder}
          editOrder={this.handleEditOrder}
          order={this.state.orderToEdit}
          products={products}
        />
        <Button
          icon="add" 
          label="Create Order"
          onClick={this.handleShowForm}
        />
        <Footer />
      </div>
    );
  }
}

export default Orders;
