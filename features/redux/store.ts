import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
} from 'redux-persist';
import {storage} from './storage';
import { cartReducers } from "./cart-slice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['items'],
}

const persistedReducer = persistReducer(persistConfig, cartReducers)

export const makeStore:any = () => { 
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck:false,
                    // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }),
    })
}

export const store = makeStore();
export const persistor = persistStore(store)
