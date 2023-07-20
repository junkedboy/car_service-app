import { createSlice } from '@reduxjs/toolkit'

export const modal = createSlice({
    name: 'modal',
    initialState: {
        title: '',
        visibility: false,
        loginVisibility: false,
    },
    reducers: {
      setModalTitle: (state, action) => {
        state.title = action.payload
      },
      toggleVisibility: (state, action) => {
        state.visibility = action.payload
      },
      toggleLoginVisibility: (state, action) => {
        state.loginVisibility = action.payload
      },
    }
})

export const { 
  setModalTitle, 
  toggleVisibility,
  toggleLoginVisibility,
} = modal.actions

export default modal.reducer