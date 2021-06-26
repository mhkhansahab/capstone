import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/users";
import chatReducer from "./reducers/chats";
import statusReducer from "./reducers/status";
import requestReducer from "./reducers/requests";
import { combineReducers } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    userReducer,
    chatReducer,
    statusReducer,
    requestReducer
  }
)

export default configureStore({
  reducer: rootReducer,
  middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})