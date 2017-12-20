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
import style from './style.scss';

const Order = ({ order, editOrder, deleteOrder, id }) => (

  <Card style={{ width: '600px' }}>
    <CardTitle
      title={order.get('nameConsumer')}
      subtitle={order.get('date')}
    />
    <CardText>
      {
        order.get('productItems').map(item => (
          <div className={style.row}>
            <div className={style.column}>
              <h1>{item.get('descProduct')}</h1>
            </div>
            <div className={style.column}>
              <h1>{item.get('cantProduct')}</h1>
            </div>
            <div className={style.column}>
              <h1>{item.get('totalProduct')}</h1>
            </div>
          </div>    
        ))
      }        
    </CardText>

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

Order.propTypes = {
  id: PropTypes.number.isRequired,
  order: ImmutablePropTypes.map.isRequired,
  editOrder: PropTypes.func.isRequired,
  deleteOrder: PropTypes.func.isRequired,
};

export default Order;
