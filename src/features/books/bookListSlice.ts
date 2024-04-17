import { createSlice } from "@reduxjs/toolkit";

interface bookType {
    id: number
    name: string
    price: number
    category: string
    description: string
} 

function newId(books: bookType[]) {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1)
    return maxId + 1
}

export const bookListSlice = createSlice({
    name: 'bookList',
    initialState: {
        books: [
            {id: 1, name: 'book 1', price: 1, category: 'Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {id: 2, name: 'book 2', price: 2, category: 'Mystery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {id: 3, name: 'book 3', price: 3, category: 'Adventure', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ] as bookType[]
    },
    reducers: {
        addBook: (state, action) => {
            const newBook = {
                ...action.payload,
                id: newId(state.books)
            }
            
            state.books = [...state.books, newBook]
        },
        removeBook: (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload)
            state.books.splice(index, 1)
        },
        editBook: (state, action) => {
            state.books = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        ...action.payload
                    }
                }
                return book
            })

        }
    }
})

export const { addBook, removeBook, editBook } = bookListSlice.actions

export default bookListSlice.reducer