import { useSelector } from 'react-redux'
import { bookType } from '../../types/bookType'
import { stateType } from '../../types/stateType'
import Book from './Book'

function Books() {
    const books = useSelector((state: stateType) => state.bookList.books)

    return (
        <div>
            {books.map((book: bookType) => (
                <Book key={book.id} book={book}/>
            ))}
        </div>
    )
}

export default Books