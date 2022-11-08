import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { shortReducer } from "./Reducer/ShortReducer";

export const reducer = combineReducers({
  shortReducer,
});

const initialState = {
  shortUrl: "",
  loading: false,
  error: false,
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
