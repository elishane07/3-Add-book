import { createContext, useState, useCallback } from "react";
import axios from "axios";
//
const BooksContext = createContext()

function Provider ({ children }) {

    const [books, setBooks] = useState([]);

   // * const stableFetchBooks = useCallback( fetchBooks, [] )
     
   //? we can use useCallback like this 

    const fetchBooks = useCallback( async () => {
      const response = await axios.get('http://127.0.0.1:3001/books')
  
      setBooks(response.data)
    } , [] )
      
    
 
    const editBookById = async (id, newTitle) => {
      const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
        title: newTitle
      })
  
      const updateBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data}
        }  
        return book
      })
      setBooks(updateBooks)
    }
  
    const deleteBookById = async (id) => {
  
      const response = await axios.delete(`http://127.0.0.1:3001/books/${id}`)
  
      console.log(response)
  
      const UpdatedBooks = books.filter((book) => {
        return book.id !== id
      })
      setBooks(UpdatedBooks)
    }
  
    const createBook = async (title) => {
  
      const response = await axios.post('http://127.0.0.1:3001/books', {
        title
      })
  
      console.log(response)
  
      const updatedBooks = [
        ...books,
        response.data
      ];
      setBooks(updatedBooks);
    };
    
    /*

    const valueToShare = {
      books: books,
      setBooks: setBooks,
      deleteBookById: deleteBookById,
      createBook: createBook,
      editBookbyId: editBookbyId,
      fetchBooks: fetchBooks
    }
     */

    //* If a key is identical to the value, we can condense it down to just being the name of the variable

    const valueToShare = {
      books,
      setBooks,
      deleteBookById,
      createBook,
      editBookById,
      fetchBooks
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider }
export default BooksContext;