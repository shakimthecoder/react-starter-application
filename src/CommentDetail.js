import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    console.log(props);
    return (
        <div className="comments">
        <a href="/" className="avatar">
         <img src={faker.image.avatar()} alt="avatar" />
        </a>
         <div className="content">
          <a href="/" className="author">
          {props.author}
          </a>
           <div className="post">
           <span className="time">{props.timeAgo}</span>
           </div>
            <div className="metadata">
             This is a blog post!
             </div>
          
         </div>
      </div> 
    );
};

export default CommentDetail;