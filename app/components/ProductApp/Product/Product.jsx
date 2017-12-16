import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
} from 'react-toolbox/lib/card';

import { IconButton } from 'react-toolbox/lib/button';

class Product extends Component{
  static propTypes = {
    product: ImmutablePropTypes.map.isRequired,
    editProduct: PropTypes.func.isRequired,
    deleteProduct:PropTypes.func.isRequired,
  }
  state = {
    showDetail: false,
    buttonIcon: "visibility_off",
  }
  handleToggleDetail = () =>{
    this.setState({
      showDetail:!this.state.showDetail,
      buttonIcon:this.state.showDetail ?
       "visibility" : "visibility_off",
    });
  }
  render(){
    const { product, editProduct, deleteProduct, id} = this.props;
    return(
      <Card style={{width: '600px'}}>
        <CardTitle
          title={product.get('name')}
          subtitle={product.get('cost')}
        />
        <div>
          {   this.state.showDetail ?
            <CardText>{product.get('detail')}</CardText>
            : null
          }

        </div>

        <CardActions>
          <IconButton
            icon={this.state.buttonIcon}
            onClick={this.handleToggleDetail}
          />
          <IconButton
            icon="edit"
            onClick={() => editProduct(id, product)}
          />
          <IconButton
            icon="delete"
            onClick={() => deleteProduct(id)}
          />
        </CardActions>
      </Card>
    )
  }
}
export default Product;
