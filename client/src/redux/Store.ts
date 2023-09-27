import { createStore } from "redux";
import { reduce } from "./Reducer";

export const store = createStore(reduce);