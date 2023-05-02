import { createSlice } from '@reduxjs/toolkit'

export const loginSession = createSlice({
    name: 'loginSession',
    initialState: {
      loginStatus: true,
      accessToken: null,
      userId: 1,
      name: 'Alex',
      email: null,
      car: [[750, 2008], [1093, 2003], [514, 2014]], // [id, year]
    },
    reducers: {
      setLoginSession: (state, action) => {
        state.loginStatus = action.payload
      },
      setAccessToken: (state, action) => {
        state.accessToken = action.payload
      },
      setUserId: (state, action) => {
        state.userId = action.payload
      },
      setUserName: (state, action) => {
        state.name = action.payload
      },
      setUserEmail: (state, action) => {
        state.email = action.payload
      },
      setUserCar: (state, action) => {
        state.car = action.payload
      },
    }
})

export const { setLoginSession, setUserName, setUserEmail, setAccessToken, setUserId, setUserCar } = loginSession.actions

export default loginSession.reducer