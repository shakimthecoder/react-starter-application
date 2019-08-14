import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
     <div className="comments">
      <a href="/" className="avatar">
       <img alt="avatar" />
      </a>
       <div className="content">
        <a href="/" className="author">
        Shakim
        </a>
         <div className="post">
         <span className="time">Posted 4 hours ago</span>
         </div>
        
       </div>
    </div> 
  </div>
  );
};

export default App;
