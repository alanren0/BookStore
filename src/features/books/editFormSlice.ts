import { createSlice } from "@reduxjs/toolkit";

export const editFormSlice = createSlice({
    name: 'editForm',
    initialState: {
        name: '',
        price: 1,
        category: '',
        description: ''
    },
    reducers: {
        updateEditFormName: (state, action) => {
            state.name = action.payload
        },
        updateEditFormPrice: (state, action) => {
            state.price = action.payload
        },
        updateEditFormCategory: (state, action) => {
            state.category = action.payload
        },
        updateEditFormDescription: (state, action) => {
            state.description = action.payload
        },
    }
})

export const { updateEditFormName, updateEditFormPrice, updateEditFormCategory, updateEditFormDescription } = editFormSlice.actions

export default editFormSlice.reducer