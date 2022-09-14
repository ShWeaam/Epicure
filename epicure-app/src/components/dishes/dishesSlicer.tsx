import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { REDUX_STATES } from 'constants/constants';

export const dishesSlice = createSlice({

  name: REDUX_STATES.DISHES,

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

