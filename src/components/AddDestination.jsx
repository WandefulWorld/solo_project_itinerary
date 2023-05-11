import React, { useState } from 'react';

//result.json()  json-> js
//json(result) is js-> json
const AddDestination = () => {
  
  const addNewPlan = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById('input').value;
    document.getElementById('input').value = '';
    fetch('http://localhost:3000/addPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan: inputValue,
      }),
    })
      .then((result) => result.json())
      .then((result) => {
        console.log('result is: ', result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className='addDestinationContainer'>
      <input id='input' type='text' placeholder='Go explore ...' />
      <button onClick={addNewPlan} id='addDestinationBtn'>
        Add Destination
      </button>
    </form>
  );
};

export default AddDestination;
