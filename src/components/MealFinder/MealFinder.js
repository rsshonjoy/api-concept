import React, { useState } from 'react';

const MealFinder = () => {
  const [search, setSearch] = useState('');
  const handleChange = event => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }
  return (
    <div>
      <h1>Find Delicious Foods</h1>
      <input type="text" onChange={handleChange} placeholder="search food"/>
      <p>searching: {search}</p>
    </div>
  );
};

export default MealFinder;