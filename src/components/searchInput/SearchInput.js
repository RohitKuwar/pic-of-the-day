import React from 'react';
import './search.module.css';

function SearchBox({ placeHolder, handleChange }) {
  return (
    <div>
      <input type="text" placeholder={placeHolder} onChange={handleChange} />
    </div>
  )
}

export default SearchBox;
