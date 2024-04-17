import { createSlice } from "@reduxjs/toolkit";
import { bookType } from "../../types/bookType";

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        createEnabled: false,
        editEnabled: false,        
        selectedBook: {
            id: 0, 
            name: '', 
            price: 0, 
            category: '', 
            description: ''
        } as bookType
    },
    reducers: {
        enableCreatePopup: (state) => {
            state.createEnabled = true
        },
        enableEditPopup: (state) => {
            state.editEnabled = true
        },
        disablePopup: (state) => {
            state.editEnabled = false
            state.createEnabled = false
        },
        selectBook: (state, action) => {
            state.selectedBook = action.payload
        },
    }
})

export const { enableCreatePopup, enableEditPopup, disablePopup, selectBook } = popupSlice.actions

export default popupSlice.reducer