import { useState } from 'react'
import useBookContext from '../hooks/UseBookContext';

const BookEdit = ({ book, onSubmit }) => {

  const { editBookById } = useBookContext()

  const [title, setTitle] = useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editBookById(book.id, title)
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
       className=' input' 
       value={title}
       onChange={handleChange}
      />
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default BookEdit