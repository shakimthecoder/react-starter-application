import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
      <div className="ui container comments">
       <CommentDetail author="sam" />
       <CommentDetail author="bob"/>
       <CommentDetail author="james" />
       <CommentDetail author="katrina"/>

    </div>
    );
  };

ReactDOM.render(<App />, document.querySelector('#root'));

