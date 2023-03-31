import { useEffect } from 'react'
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from './hooks/UseBookContext';

function App() {

  const { fetchBooks } = useBookContext()
//
  useEffect(() => { 
    fetchBooks()
  }, [fetchBooks])
 
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList /* books={books} onDelete={deleteBookId} onEdit={editBookbyId}*/ />
      <BookCreate /*onCreate={createBook}*/ />
    </div>
  );
}

export default App;
