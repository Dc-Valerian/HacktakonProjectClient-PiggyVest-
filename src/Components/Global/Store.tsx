import myReducer from "./ReduxState"
import { configureStore } from "@reduxjs/toolkit"
import {TypedUseSelectorHook} from "react-redux"
import { useDispatch,useSelector } from "react-redux"
import storage from "redux-persist/lib/storage"
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig={
    
}