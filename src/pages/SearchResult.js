import React, { useState, useEffect } from 'react';
import Heading from '../components/heading/Heading';
import Data from '../components/data/Data';
import Pagination from '../components/pagination/Pagination';

function SearchResult({text}) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(res=>setData(res))
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Heading />
      <h3 style={{marginLeft: '.5em'}}>search result for {text}</h3>
      <Data data={currentData} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  )
}

export default SearchResult;
