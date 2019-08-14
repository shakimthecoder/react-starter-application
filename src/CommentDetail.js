import react from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comments">
        <a href="/" className="avatar" src={faker.image.avatar()}>
         <img alt="avatar" />
        </a>
         <div className="content">
          <a href="/" className="author">
          Shakim
          </a>
           <div className="post">
           <span className="time">Posted 4 hours ago</span>
           </div>
            <div className="metadata">
             This is a blog post!
             </div>
          
         </div>
      </div> 
    );
};

export default CommentDetail;