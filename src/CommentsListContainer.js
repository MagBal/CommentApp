import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import './CommentsList.css';

const mapStateToProps = state => ({
  comments: state.comments
});
 
export default connect(mapStateToProps)(CommentsList);