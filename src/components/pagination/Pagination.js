import React from 'react';
import styles from './pagination.module.css';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div>
        {pageNumbers.map(number => (
          <span className={styles.numbers} key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </span>
        ))}
      </div>
  );
};

export default Pagination;