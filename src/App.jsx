import React, {useState} from 'react';
import Days from './components/Days.jsx';
import AddDestination from './components/AddDestination.jsx';
const App = () => {
  return (
    <div className='app'>
      <h1>Hello, Ivy</h1>
      <Days />
      <AddDestination />
    </div>
  );
};

export default App;
