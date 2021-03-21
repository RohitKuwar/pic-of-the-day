import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';
import Heading from '../components/heading/Heading';
import SearchInput from '../components/searchInput/SearchInput';

function Home() {
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('loading...');
  const [searchField, setSearchField] = useState('eg.Mars');
  
  useEffect(()=>{
    let API_KEY = '9yhr0T7TI7SzN4IxOOeZxs5yCMu2Yi0t7UNMGKQy';
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => {
        setDate(res.date)
        setTitle(res.title)
        setImage(res.url)
        setExplanation(res.explanation)
      })
  },[date],[title],[image],[explanation])

  return (
    <div>
      <Heading />
      <div className={styles.secondRow}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.searchBox}>
          <SearchInput
          placeHolder={searchField} 
          handleChange={(e)=>setSearchField(e.target.value)} />
          <Link to='/search'><a href="!"><button>Search</button></a></Link>
        </div>
      </div>
      <img src={image} alt="pic of the day" width="90%" height="auto" />
      <p className={styles.explanation}>
        <span className={styles.explain}>Explanation:</span> {explanation}
        </p>
      <h3 className={styles.date}>{date}</h3>
      <h6 className={styles.copyright}>&#169; Image Copyright by NASA. All rights reserved</h6>
    </div>
  )
}

export default Home;
