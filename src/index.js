import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


const App = () => {
    return (
      <div className="ui container comments">
       <ApprovalCard>
           <CommentDetail 
            author="sam" 
            timeAgo="Today at 5:55PM" 
            text="Welcome" 
            src={faker.image.avatar()} 
            />
         </ApprovalCard>

       <CommentDetail 
        author="bob" 
         timeAgo="Today at 3:33PM" 
          text="Life is good" 
           src={faker.image.avatar()} />
       <CommentDetail 
        author="james" 
       timeAgo="Today at 2:22PM" 
       text="happy" 
       src={faker.image.avatar()} />
       <CommentDetail author="katrina" timeAgo="Today at 1:00am" text="no need" src={faker.image.avatar()} />

    </div>
    );
  };

ReactDOM.render(<App />, document.querySelector('#root'));

