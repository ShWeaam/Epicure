import { createSlice } from '@reduxjs/toolkit'
import _ from "lodash";

export const chefsSlice = createSlice({
  name: 'chefs',

  initialState: {
    value: [],
    shouldFetch: true
  },

  reducers: {
    setChefs: (state, action) => {
      state.value = action.payload;
    },

    deleteChefs: state => {
      state.value = [];
    },

    setShouldFetchChefs: (state, action) => {
      state.shouldFetch = action.payload;
    },

    addResturantsForChef: (state, action) => {
      let indexOfChef = action.payload.indexOfChef;
      let resturants = {
        resturants: action.payload.resturants
      };
      console.log(state.value[indexOfChef]);
      state.value[indexOfChef] = _.merge(state.value[indexOfChef], resturants);
      console.log(indexOfChef);
      console.log(resturants);
    }
  },
})

export const { setChefs, deleteChefs, setShouldFetchChefs, addResturantsForChef } = chefsSlice.actions

export default chefsSlice.reducer

