import { bookType } from "../../types/bookType"
import { useDispatch } from "react-redux"
import { removeBook } from "./bookListSlice"
import { disablePopup, enableEditPopup, selectBook } from "../popup/popupSlice"

type Props = {
    book: bookType
}

function Book( props: Props ) {
    const { book } = props

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(disablePopup()) // should only have one popup at a time
        dispatch(selectBook(book))
        dispatch(enableEditPopup())
    }

    return (
        <div className='card-container'>
            <div style={{display: 'flex'}}>
                <div className='card-side'  onClick={handleClick}>
                    <h3>{book.name}</h3>
                    <h4>$ {book.price}</h4>
                </div>

                <div className='card-main'  onClick={handleClick}>
                    <p>{book.description || 'No Description'}</p>
                    <p>Category: {book.category || 'None'}</p>
                    
                </div>

                <button className='delete-btn' onClick={() => dispatch(removeBook(book.id))}>&#128465; Delete</button>
            </div>
            
        </div>
    )
}

export default Book