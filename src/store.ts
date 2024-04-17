import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './features/books/bookListSlice'
import createFormReducer from './features/books/createFormSlice'
import editFormReducer from './features/books/editFormSlice'
import popupReducer from './features/popup/popupSlice'

export default configureStore({
    reducer: {
        bookList: booksReducer,
        createForm: createFormReducer,
        editForm: editFormReducer,
        popup: popupReducer
    }
})