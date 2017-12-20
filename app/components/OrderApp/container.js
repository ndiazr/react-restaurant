import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Orders from './Orders';
import {
  fetchOrders,
  fetchProducts,
  createOrder,
  editOrder,
  deleteOrder,
} from '../../actions';

const mapStateToProps = (state) => ({
  productsData: state.productsData,
  ordersData: state.ordersData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchOrders,
    fetchProducts,
    createOrder,
    editOrder,
    deleteOrder,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
