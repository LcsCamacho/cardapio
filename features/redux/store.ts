import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
} from 'redux-persist';
import {storage} from './storage';
import { cartReducers } from "./cart-slice";
import { pedidosReducers } from "./pedidos-slice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['items', 'pedidos'],
}
const rootReducer = combineReducers({
    items: cartReducers,
    pedidos: pedidosReducers
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

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
