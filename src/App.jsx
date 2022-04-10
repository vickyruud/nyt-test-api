import './App.css';
import { useEffect, useState } from 'react';
import BookGrid from './BookGrid';

const key = 'OLwLmtGas8CilAAxE7ZXaSnSfFgvdhGQ'


function App() {

  const [state, setState] = useState({
    books : []
  });

  const fetchHardCoverBooks = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.results.books)
        setState({
          ...state,
          books: resp.results.books
        })
      })
  }

  const fetchBestSellers = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key}`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        
      })
  }


  useEffect(() => {
    fetchHardCoverBooks();
    fetchBestSellers();    

  }, [])

 

  return (
    <div className="App">
      <BookGrid books={state.books} />
    </div>
  );
}

export default App;
