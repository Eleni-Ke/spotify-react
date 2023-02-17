import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playlistReducer from "../reducers/playlistReducer";
import songReducer from "../reducers/songReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    song: songReducer,
    playlist: playlistReducer,
  }),
});

export default store;
