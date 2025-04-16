import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { controlsReducer, themeReducer } from './features';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
