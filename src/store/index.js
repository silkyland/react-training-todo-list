import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import RootReducer from "./reducers/RootReducer";

const store = createStore(RootReducer, devToolsEnhancer());

export default store;
