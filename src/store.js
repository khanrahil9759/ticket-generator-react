import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ticketReducer from "./redux/ticketReducer";

const initialState = {
  ticket: [],
};

const middleware = [thunk];

const store = createStore(
  ticketReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
