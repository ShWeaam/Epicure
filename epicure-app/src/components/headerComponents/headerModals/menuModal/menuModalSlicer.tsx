import { createSlice } from '@reduxjs/toolkit'

export const menuModalSlice = createSlice({

  name: 'menuModalIsOpen',

  initialState: {
    value: false
  },

  reducers: {
    setMenuModalIsOpen: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setMenuModalIsOpen } = menuModalSlice.actions

export default menuModalSlice.reducer

