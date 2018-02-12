import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import AddComment from "./AddCommentContainer";

const App = () => {
  return (
    <div className="App">
      <h1>CommentApp</h1>
      <AddComment />
      <CommentsListContainer />
    </div>
  );
};

export default App;