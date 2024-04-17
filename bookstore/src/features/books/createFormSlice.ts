import { createSlice } from "@reduxjs/toolkit";

export const createFormSlice = createSlice({
    name: 'createForm',
    initialState: {
        name: '',
        price: 1,
        category: '',
        description: ''
    },
    reducers: {
        updateCreateFormName: (state, action) => {
            state.name = action.payload
        },
        updateCreateFormPrice: (state, action) => {
            state.price = action.payload
        },
        updateCreateFormCategory: (state, action) => {
            state.category = action.payload
        },
        updateCreateFormDescription: (state, action) => {
            state.description = action.payload
        },
    }
})

export const { updateCreateFormName, updateCreateFormPrice, updateCreateFormCategory, updateCreateFormDescription } = createFormSlice.actions

export default createFormSlice.reducer