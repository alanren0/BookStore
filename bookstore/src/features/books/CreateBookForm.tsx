import { useSelector, useDispatch } from 'react-redux'
import { stateType } from '../../types/stateType'
import { updateCreateFormName, updateCreateFormPrice, updateCreateFormCategory, updateCreateFormDescription } from './createFormSlice'
import { addBook } from './bookListSlice'
import { disablePopup } from '../popup/popupSlice'
import { useEffect } from 'react'


function CreateBookForm() {
    const form = useSelector((state: stateType) => state.createForm)
    const dispatch = useDispatch()
    const categories = ['Fiction', 'Nonfiction', 'Mystery', 'Fantasy', 'Adventure']

    // initialize form values
    useEffect(() => {
        dispatch(updateCreateFormName(''))
        dispatch(updateCreateFormPrice(''))
        dispatch(updateCreateFormCategory('Fiction'))
        dispatch(updateCreateFormDescription(''))
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addBook(form))
        dispatch(disablePopup())
    }

    return (
        <div className='form-container'>
            <h1 style={{textAlign: 'center'}}>Add Book</h1>
            <form onSubmit={handleSubmit}>
            <div className='form-section'>
                    <label className='form-label'>Name: </label>
                    <input 
                        className='form-input' 
                        type='text' 
                        value={form.name} 
                        placeholder='Name' 
                        required
                        onChange={(e) => dispatch(updateCreateFormName(e.target.value))}
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
                        onChange={(e) => dispatch(updateCreateFormPrice(e.target.value))}
                    />
                </div>

                <div className='form-section'>
                    <label className='form-label'>Category: </label>
                    <select 
                        className='form-input' 
                        onChange={(e) => dispatch(updateCreateFormCategory(e.target.value))}
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
                        onChange={(e) => dispatch(updateCreateFormDescription(e.target.value))}
                    />
                </div>

                <div className='form-section'>
                    <input className='form-btn' type='button' value='Cancel' onClick={() => dispatch(disablePopup())}></input>
                    <input className='form-btn' type='submit' value='Add'/>
                </div>
            </form>
        </div>
    )
}

export default CreateBookForm