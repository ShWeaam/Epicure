import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from 'store'

export const resturantsSlice = createSlice({
  name: 'resturants',
  initialState: {
    value: [],
    shouldFetch: true
  },
  reducers: {
    setResturants: (state, action) => {
      state.value = action.payload;
    },

    deleteResturants: state => {
      state.value = [];
    },

    setShouldFetchResturants: (state, action) => {
      state.shouldFetch = action.payload;
    }
  },
})

export const { setResturants, setShouldFetchResturants, deleteResturants } = resturantsSlice.actions
// Other code such as selectors can use the imported `RootState` type
// export const selectResturant = (state: RootState) => state.resturants.value

export default resturantsSlice.reducer

