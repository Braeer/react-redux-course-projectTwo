import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { controlsReducer, themeReducer, countryReducer, detailsReducer } from './features';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
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
