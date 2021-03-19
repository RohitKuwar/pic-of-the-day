import React, {useState, useEffect} from 'react';
import styles from './App.module.css';

function App() {
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('loading...')

  useEffect(()=>{
    let API_KEY = '9yhr0T7TI7SzN4IxOOeZxs5yCMu2Yi0t7UNMGKQy';
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(r => {
        setDate(r.date)
        setTitle(r.title)
        setImage(r.url)
        setExplanation(r.explanation)
      })
  },[date],[title],[image],[explanation])

  return (
    <div>
      <h2>{date}</h2>
      <h2>{title}</h2>
      <img src={image} alt="" width="90%" height="auto" />
      <p>{explanation}</p>
    </div>
  )
}

export default App
