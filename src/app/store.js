import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
import adminReducer from "../features/counter/adminSlice";
import serviceReducer from "../features/counter/serviceSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	user: userReducer,
	admin: adminReducer,
	service: serviceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
});
