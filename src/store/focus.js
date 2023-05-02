import { createSlice } from '@reduxjs/toolkit'

export const focus = createSlice({
    name: 'focus',
    initialState: {
        id: null,
        title: null,
    },
    reducers: {
      setFocus: (state, action) => {
        const [id, title] = action.payload;
        state.id = id;
        state.title = title;
      }
    }
})

export const { setFocus } = focus.actions

export default focus.reducer