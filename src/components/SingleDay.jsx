import React, { useState } from 'react';
const SingleDay = () => {
  // let plans;
  const showPlan = () => {
    fetch('http://localhost:3000/addPlan', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((result) => result.json())
      .then((result) => {
        console.log('result', result)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // console.log('plans is ', plans)

  return (


    <div className='planContainer'>
      <ul></ul> 
    </div>
  )
}

export default SingleDay;
