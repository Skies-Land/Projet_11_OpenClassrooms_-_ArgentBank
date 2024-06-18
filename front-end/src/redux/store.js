import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// Clé pour la configuration persistante
const PERSIST_KEY = "root";

// Configuration pour redux-persist
const persistConfig = {
    key: PERSIST_KEY,
    storage,
};

// Combine tous les reducers
const rootReducer = combineReducers({
    user: userReducer,
});

// Créer un reducer persistant 
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuration du store Redux
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;