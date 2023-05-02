import { createSlice } from '@reduxjs/toolkit'

export const modal = createSlice({
    name: 'modal',
    initialState: {
        title: '',
        visibility: false,
        // reservationVisibility: false,
        loginVisibility: false,
        // serviceVisibility: false,
    },
    reducers: {
      setModalTitle: (state, action) => {
        state.title = action.payload
      },
      toggleVisibility: (state, action) => {
        state.visibility = action.payload
      },
      // toggleReservationVisibility: (state, action) => {
      //   state.reservationVisibility = action.payload
      // },
      toggleLoginVisibility: (state, action) => {
        state.loginVisibility = action.payload
      },
      // toggleServiceVisibility: (state, action) => {
      //   state.serviceVisibility = action.payload
      // },
    }
})

export const { setModalTitle, toggleVisibility, toggleReservationVisibility, toggleLoginVisibility, toggleServiceVisibility } = modal.actions

export default modal.reducer