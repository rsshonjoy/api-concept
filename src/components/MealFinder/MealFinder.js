import React from 'react';

const MealFinder = () => {
  const handleChange = event => {
    console.log(event.target.value);
  }
  return (
    <div>
      <h1>Find Delicious Foods</h1>
      <input type="text" onChange={handleChange} placeholder="search food"/>
    </div>
  );
};

export default MealFinder;