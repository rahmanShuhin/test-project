import cartReducer from "./Cart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: cartReducer,
});
export default allReducers;
