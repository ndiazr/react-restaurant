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
      createOrder: PropTypes.func.isRequired,
      active: PropTypes.bool.isRequired,
      closeForm: PropTypes.func.isRequired,
  };

  static orderState = () => fromJS({
    nameConsumer: '',
    productItems: [],
  });

  state = {
    orderState: OrderForm.orderState(),
  };

  componentWillReceiveProps(nextProps) {
    const { order } = nextProps;
    console.log(order);
    this.setState({ orderState: order || OrderForm.orderState() });
    // this.setState({ orderState: nextProps.order || orderForm.orderState() }),
  }

  onTitleChange = (value) => {
    const orderState = this.state.orderState.set('title', value);
    this.setState({ orderState });
  }

  onBodyChange = (value) => {
    const orderState = this.state.orderState.set('body', value);
    this.setState({ orderState });
  }

  handleCreateorder = () => {
    const { createorder } = this.props;
    const order = this.state.orderState.set('date', Date());
    this.setState({ orderState: OrderForm.orderState() }, () => createorder(order));
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

    const { active, closeForm, order } = this.props;

    const actions = [
      { label: "Cancel", onClick: this.handleClose },
      {
        label: isNil(order) ? "Create" : "Update",
        onClick: isNil(order) ? this.handleCreateorder : this.handleEditorder,
      }
    ];
      return (
        <div>
          <Dialog
            actions={actions}
            active={active}
            onEscKeyDown={this.handleClose}
            onOverlayClick={this.handleClose}
            title='My awesome dialog'
          >
            <Input
              label="Title"
              onChange={this.onTitleChange}
              value={this.state.orderState.get('title')}
            />
            <Input
              label="Body"
              onChange={this.onBodyChange}
              value={this.state.orderState.get('body')}
            />
          </Dialog>

        </div>
      );
  }
}

export default OrderForm;
