import {createStore} from "redux";
import gameeReducer from "./game-reducer";

let store =createStore( gameeReducer);
export default store

