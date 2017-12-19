import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Orders from './Orders';
import {
  fetchPosts,
  fetchProducts,
  createPost,
  editPost,
  deletePost,
} from '../../actions';

const mapStateToProps = (state) => ({
  productsData: state.productsData,
  ordersData: state.ordersData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchPosts,
    fetchProducts,
    createPost,
    editPost,
    deletePost,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
