import { createStore } from "redux";
import CartReducers from "../Reducers/CartReducers";



export const store = createStore(CartReducers);