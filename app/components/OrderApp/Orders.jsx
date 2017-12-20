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
    const { fetchOrders, fetchProducts } = this.fetchOrders;
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
    const { createPost } = this.props;
    this.setState({ showForm: false }, () => createPost(post.toJS()));
  };
  
  handleEditOrder = (order) => {
    const { editPost } = this.props;
    this.setState({ showForm: false }, () => editPost(post.toJS()));
  };

  handleEditOrderForm = (id, order) => {
    this.setState({
      showForm: true,
      postToEdit: post
        .set('id', id)
        .set('updated_at', Date()),
    });
  };

  handleDeleteOrder = (id) => {
    const { deletePost } = this.props;
    deletePost(id);
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
          ocClick={this.handleShowForm}
        />
      </div>
    );
  }
}

export default Orders;
