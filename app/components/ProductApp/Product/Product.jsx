import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

import {
  Card,
  CardTitle,
  CardText,
  CardMedia,
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
    buttonIcon: "visibility",
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
<<<<<<< HEAD
    return (
      // {
      //   console.log(` producto recibido: ${this.state}`),
      // }
=======
    return(
>>>>>>> c78fe250e0fdc931d1db2606dba91fd82bfc3ce1
      <Card style={{width: '600px'}}>
        <CardTitle
          title={product.get('name')}
          subtitle={product.get('cost')}
        />
        <CardMedia
          aspectRatio="wide"
          image="https://image.flaticon.com/icons/png/512/424/424746.png"
        />
        <div>
          {   this.state.showDetail ?
            // <CardText>{product.get('detail')}</CardText>
            <Card>
              <CardTitle
                title="Detalle"
              />
              <CardText>
                {product.get('detail')}
              </CardText>
            </Card>
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
