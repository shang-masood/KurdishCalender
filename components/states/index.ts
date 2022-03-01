import { configureStore } from '@reduxjs/toolkit';
import Slice from './slice';

const store = configureStore({
  reducer: { event: Slice },
});

export default store;
