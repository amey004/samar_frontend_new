import {legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import keplerGlReducer from "kepler.gl/reducers";
import { taskMiddleware } from "react-palm/tasks";

function appReducer() {
  // console.log("Hi. In store");
  return {};
}
const initialState = {};

const keplerReducer = keplerGlReducer.initialState({
  uiState: {
    activeSidePanel: null,
    currentModal: null,
  },
});

const reducers = combineReducers({
  keplerGl: keplerReducer,
  app: appReducer,
});

export default createStore(
  reducers,
  initialState,
  applyMiddleware(taskMiddleware)
);