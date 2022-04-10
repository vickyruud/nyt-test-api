import './App.css';
import { useEffect, useState } from 'react';
import Book from './Book';

const key = 'OLwLmtGas8CilAAxE7ZXaSnSfFgvdhGQ'


function App() {

  const [state, setState] = useState({
    books : []
  });


  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.results.books)
        setState({
          ...state,
          books: resp.results.books
        })
      })
    

  })

  const data = state.books.map((book, i) => {
    return (
      <Book book= {book} />
    )
  })

  return (
    <div className="App">
      books!!!
      {data}
    </div>
  );
}

export default App;
