import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: ( state ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    incrementBy: ( state, action ) => {
      state.counter += action.payload;
    },
    decrement: ( state ) => {
      state.counter -= 1;
    }
  },
})

// Action creators are generated for each case reducer function 
// --> las acciones se crean en base a los reducers --> tienen el mismo nombre, pero no son lo mismo
export const { increment, incrementBy, decrement } = counterSlice.actions