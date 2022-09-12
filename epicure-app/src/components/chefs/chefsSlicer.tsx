import { createSlice } from '@reduxjs/toolkit'
import _ from "lodash";

export const chefsSlice = createSlice({
  name: 'chefs',

  initialState: {
    value: [],
    shouldFetch: true,
    chefOfTheWeek: {}
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
      let resturants = action.payload.resturants;
      state.value[indexOfChef] = _.merge(state.value[indexOfChef], {resturants});
    },

    setChefOfTheWeek: (state, action) => {
      state.chefOfTheWeek = action.payload;
    }
  },
})

export const { setChefs, deleteChefs, setShouldFetchChefs, addResturantsForChef, setChefOfTheWeek } = chefsSlice.actions

export default chefsSlice.reducer

