import {connect} from 'react-redux';
import AddComment from './AddComment';
import {addComment} from './action'

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(AddComment);