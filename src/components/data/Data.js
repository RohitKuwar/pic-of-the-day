import React from 'react';
import styles from './data.module.css';

const Data = ({ data }) => {
  return (
    <div className={styles.cotainer}>
      {
        data.map(item => (
          <div className={styles.box} key={item.id}>
            <div className={styles.imageBox}>{item.id}</div>
            <div className={styles.info}>
              <h3>{item.title}</h3>
              <h4>{item.body}</h4>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Data;