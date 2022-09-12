import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({

  name: 'dishes',

  initialState: {
    value: [],
    shouldFetch: true
  },

  reducers: {
    setDishes: (state, action) => {
      state.value = action.payload;
    },

    deleteDishes: state => {
      state.value = [];
    },

    setShouldFetchDishes: (state, action) => {
      state.shouldFetch = action.payload;
    },

  },
})

export const { setDishes, setShouldFetchDishes, deleteDishes } = dishesSlice.actions

export default dishesSlice.reducer

