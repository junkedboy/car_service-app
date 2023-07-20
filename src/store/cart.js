import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        cart: [],
    },
    reducers: {
      setCart: (state, action) => {
        state.cart = [...state.cart, action.payload];
        state.count = state.cart.length
      },
      deleteFromCart: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
        state.count = state.cart.length
      },
      increaseItemCounter: (state, action) => {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload.id) {
            if (item.count < action.payload.maxCount) {
              return {
                id: item.id,
                count: item.count + 1,
              }
            } else {
              return item
            }
          } else {
            return item
          }
        })
      },
      decreaseItemCounter: (state, action) => {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload) {
            if (item.count > 1) {
              return {
                id: item.id,
                count: item.count - 1,
              }
            } else {
              return item
            }
          } else {
            return item
          }
        })
      },
      cleanCart: (state, action) => {
        state.cart = [];
        state.count = 0
      }
    }
})

export const { setCart, deleteFromCart, increaseItemCounter, decreaseItemCounter, cleanCart } = cart.actions

export default cart.reducer