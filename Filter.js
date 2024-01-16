import React from 'react';

const Filter = ({ onCategoryChange }) => {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="">All</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
  );
};

export default Filter;