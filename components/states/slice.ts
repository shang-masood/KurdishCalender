import { createSlice } from '@reduxjs/toolkit';
import Event from '../event';
const initialState: Event[] = [];
const Slice = createSlice({
  name: 'adding',
  initialState,
  reducers: {
    add(state, action) {
      state.unshift(action.payload);
    },
    replace(state, action){
      state.Event = action.payload
  },
  },
});

export const AddEvent = Slice.actions;

export default Slice.reducer;
