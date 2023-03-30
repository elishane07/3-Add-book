import { useState } from 'react'
import BookEdit from './BookEdit'
import useBookContext from '../hooks/UseBookContext';

const BookShow = ({ book }) => {

  const { deleteBookById } = useBookContext()

  const [showEdit, setShowEdit] = useState(false)

  const handleSubmit = () => {
    setShowEdit(false)
  }

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }

  return (
    <div className="book-show">
      <img  src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
    <div>{content}</div>
    <div className="actions">
      <button className='edit' onClick={handleEditClick} >
        Edit  
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  </div>
  )
}

export default BookShow