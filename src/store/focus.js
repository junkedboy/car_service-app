import { createSlice } from '@reduxjs/toolkit'

export const focus = createSlice({
    name: 'focus',
    initialState: {
        id: null,
        title: null,
        shopCategory: null,
        shopSubCategory: null,
    },
    reducers: {
      setFocus: (state, action) => {
        const [id, title] = action.payload;
        state.id = id;
        state.title = title;
      },
      setShopCategoryFocus: (state, action) => {
        state.shopCategory = action.payload;
        state.shopSubCategory = null
      },
      setShopSubCategoryFocus: (state, action) => {
        state.shopSubCategory = action.payload;
      }
    }
})

export const { setFocus, setShopCategoryFocus, setShopSubCategoryFocus } = focus.actions

export default focus.reducer