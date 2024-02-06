


import { configureStore } from '@reduxjs/toolkit';

// reducers
import { reducerExample } from './features/index';

export const store = configureStore({
  reducer: {
    example: reducerExample,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;