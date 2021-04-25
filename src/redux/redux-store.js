import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navBar: navBarReducer,
})

let store = createStore(reducers);

export default store;