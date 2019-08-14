import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
      <div className="ui container comments">
       <CommentDetail author="sam" timeAgo="Today at 5:55PM" text="Welcome" />
       <CommentDetail author="bob" timeAgo="Today at 3:33PM" text="Life is good" />
       <CommentDetail author="james" timeAgo="Today at 2:22PM" text="happy" />
       <CommentDetail author="katrina" timeAgo="Today at 1:00am" text="no need" />

    </div>
    );
  };

ReactDOM.render(<App />, document.querySelector('#root'));

