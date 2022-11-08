import {
  START_LOADING,
  FINISH_LOADING,
  ERROR,
  SET_SHORT_URL,
} from "../Actions/types";

export const shortReducer = (
  state = { loading: false, error: false, shortUrl: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case FINISH_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case SET_SHORT_URL: {
      return {
        error: false,
        loading: false,
        shortUrl: payload,
      };
    }
    default:
      return state;
  }
};
