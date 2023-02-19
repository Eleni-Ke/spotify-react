import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playlistReducer from "../reducers/playlistReducer";
import songReducer from "../reducers/songReducer";
import userReducer from "../reducers/userReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";

import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transform: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ELENI,
    }),
  ],
};

const bigReducer = combineReducers({
  user: userReducer,
  song: songReducer,
  playlist: playlistReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
