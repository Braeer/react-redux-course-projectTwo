import {
  CLEAR_DETAILS,
  SET_COUNTRY,
  SET_ERROR,
  SET_HEIGHBORS,
  SET_LOADING,
} from './details-action';

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
  neighbors: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };
    }
    case CLEAR_DETAILS: {
      return initialState;
    }
    case SET_HEIGHBORS: {
      return {
        ...state,
        neighbors: payload,
      };
    }
    case SET_COUNTRY: {
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
