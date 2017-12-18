import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
} from 'react-toolbox/lib/card';
import { IconButton } from 'react-toolbox/lib/button';

class Order extends Component {

  static PropTypes = {
    order: ImmutablePropTypes.map.isRequired,
    editOrder: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
  }

  render() {
    const { order, editOrder, deleteOrder, id } = this.props;
    return (
      <Card style={{width: '600px'}}>
        <CardTitle
          title={order.get('name_consumer')}
          subtitle={order.get('date')}
        />
        <CardText>{order.get('body')}</CardText>

        <CardActions>
          <IconButton
            icon={this.state.buttonIcon}
            onClick={this.handleToggleComments}
          />
          <IconButton
            icon="edit"
            onClick={() => editOrder(id, order)}
          />
          <IconButton
            icon="delete"
            onClick={() => deleteOrder(id)}
          />
        </CardActions>
      </Card>
    );
  }
}
export default Order;
