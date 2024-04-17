import { useSelector, useDispatch } from 'react-redux'
import { stateType } from '../../types/stateType'
import { updateEditFormName, updateEditFormPrice, updateEditFormCategory, updateEditFormDescription } from './editFormSlice'
import { editBook } from './bookListSlice'
import { bookType } from '../../types/bookType'
import { useEffect } from 'react'
import { disablePopup } from '../popup/popupSlice'

type Props = {
    book: bookType
}

function EditBookForm( props: Props ) {
    const { book } = props

    const form = useSelector((state: stateType) => state.editForm)
    const dispatch = useDispatch()
    const categories = ['Fiction', 'Nonfiction', 'Mystery', 'Fantasy', 'Adventure']

    // initialize form values
    useEffect(() => {
        dispatch(updateEditFormName(book.name))
        dispatch(updateEditFormPrice(book.price))
        dispatch(updateEditFormCategory(book.category))
        dispatch(updateEditFormDescription(book.description))
    }, [book]);
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(editBook({
            ...form,
            id: book.id
        }))
        dispatch(disablePopup())
    }

    return (
        <div className='form-container'>
            <h1 style={{textAlign: 'center'}}>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-section'>
                    <label className='form-label'>Name: </label>
                    <input 
                        className='form-input' 
                        type='text' 
                        value={form.name} 
                        placeholder='Name'
                        required  
                        onChange={(e) => dispatch(updateEditFormName(e.target.value))}
                    />
                </div>

                <div className='form-section'>
                    <label className='form-label'>Price: </label>
                    <input 
                        className='form-input' 
                        type='number'
                        value={form.price} 
                        placeholder='Price' 
                        required
                        onChange={(e) => dispatch(updateEditFormPrice(e.target.value))}
                    />
                </div>

                <div className='form-section'>
                    <label className='form-label'>Category: </label>
                    <select 
                        defaultValue={book.category}
                        className='form-input' 
                        onChange={(e) => dispatch(updateEditFormCategory(e.target.value))}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className='form-section'>
                    <label className='form-label'>Description: </label>
                    <textarea 
                        className='form-text' 
                        value={form.description} 
                        placeholder='Description' 
                        onChange={(e) => dispatch(updateEditFormDescription(e.target.value))}
                    />
                </div>

                <div className='form-section'>
                    <input className='form-btn' type='button' value='Cancel' onClick={() => dispatch(disablePopup())}></input>
                    <input className='form-btn' type='submit' value='Save Changes'/>
                </div>
            </form>
        </div>
    )
}

export default EditBookForm