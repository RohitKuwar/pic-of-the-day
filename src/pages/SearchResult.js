import React from 'react';
import Heading from '../components/heading/Heading';
import Pagination from '../components/pagination/Pagination';

function SearchResult({text}) {

  return (
    <div>
      <Heading />
      <h3 style={{marginLeft: '.5em'}}>search result for {text}</h3>
      <Pagination />
    </div>
  )
}

export default SearchResult;
