import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    headerDetails: null,
    headerToggle: true,
    detailsTable: [],
    detailToggle: false,
    total: ''
}

export const formSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            state.headerDetails = action.payload
        },
        setHeaderToggle: (state, action) => {
            state.headerToggle = action.payload
        },
        setDetails: (state, action) => {
            state.detailsTable.push(action.payload)
        },
        setDetailsToggle: (state, action) => {
            state.detailToggle = action.payload
        },
        setNotDeleted: (state, action) => {
            state.detailsTable = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setHeader, setHeaderToggle, setDetails, setDetailsToggle, setNotDeleted,setTotal } = formSlice.actions

export default formSlice.reducer