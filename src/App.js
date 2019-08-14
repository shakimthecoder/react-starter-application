import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = { text: 'Click me'};
  const labelText = 'Enter name:';

  return(

  <div>

   <label className="label" htmlFor="name">
    { labelText }
   </label>


</div>


  );
};

export default App;
