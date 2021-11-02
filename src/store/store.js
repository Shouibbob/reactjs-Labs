import { createStore } from "redux";
import favuoriteReducer from "./reducer";

//redux dev tool
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(favuoriteReducer, composeEnhancers);

export default store;
