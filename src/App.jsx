import './App.css';
import { useEffect, useState } from 'react';
import BookGrid from './BookGrid';
import axios from 'axios'
import { Button } from '@mui/material';


const key = 'OLwLmtGas8CilAAxE7ZXaSnSfFgvdhGQ'


function App() {

  const [state, setState] = useState({
    books : []
  });

  const fetchHardCoverBooks = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
      .then(resp => resp.json())
      .then(resp => {
        setState({
          ...state,
          books: resp.results.books
        })
      })
  }

  const fetchNames = () => {
      fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key}`)
      .then(resp => resp.json())
      .then(resp => {
        
      })
  }

  const fetchBestSellers = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/e-book-fiction?api-key=${key}`)
      .then(resp => resp.json())
      .then(resp => {
        
      })
  }

  const getHardCoverFiction = () => {
    axios.get('/hardcover_fiction')
      .then(resp => console.log(resp));
  }


  useEffect(() => {
    fetchHardCoverBooks();
    fetchBestSellers();  
    fetchNames();

  }, [])

 

  return (
    <div className="App">
      <Button onClick={() => { getHardCoverFiction()}}>
      Get HardCover Fiction Books
      </Button>
      <BookGrid books={state.books} />
    </div>
  );
}

export default App;
