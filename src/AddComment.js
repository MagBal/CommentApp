import React from "react";
import AddCommentContainer from "./AddCommentContainer";
import "./AddComment.css";

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.addComment(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type = "text"
          placeholder = "new comment"
          value = {this.state.value}
          onChange = {this.onChange}
        />
        <button className = "btn-add" type = "submit" onClick = {this.handleSubmit}>
          Add Comment
        </button>
      </div>
    );
  }
}

export default AddComment;
