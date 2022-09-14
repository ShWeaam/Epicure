import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { REDUX_STATES } from 'constants/constants';
// import type { RootState } from 'store'

export const resturantsSlice = createSlice({
  name: REDUX_STATES.RESTURANTS,
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

