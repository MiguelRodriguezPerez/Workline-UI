import { combineReducers, createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { getLoggedUser, loggedUserSlice } from "../slices/loggedUser";
import storage from 'redux-persist/lib/storage';

const persistConfig =  {
    key : 'root',
    storage,
    whitelist: ['loggedUser']
}

const rootReducer = combineReducers({
    loggedUser : loggedUserSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const worklineStore = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: getLoggedUser,
          },
          serializableCheck: false,
        })
})

export const persistor = persistStore(worklineStore);