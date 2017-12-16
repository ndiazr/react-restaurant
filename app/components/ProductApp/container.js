import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Products from './Products';
import {
  fetchProducts,
  createProduct,
  deleteProduct,
  editProduct,
} from '../../actions';

const mapStateToProps = (state) => ({
  productsData: state.productsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchProducts,
    createProduct,
    deleteProduct,
    editProduct,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
