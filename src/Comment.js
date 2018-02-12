import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li>
      {text}
      <div>
        <span className="votesCount"> votes: {votes} </span>
        <button className="btn thumb-up" onClick={() => thumbUpComment(id)}>Thumb Up</button>
        <button className="btn thumb-down" onClick={() => thumbDownComment(id)}>Thumb Down</button>
        <button className="btn remove" onClick={() => removeComment(id)}>Remove</button>
      </div>
   </li>

export default Comment;