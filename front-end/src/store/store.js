import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilisation du storage local
import userSlice from '../store/userSlice'; // Importation de userSlice

/** ===== PERSIST CONFIG =====
* 
* Configuration du store avec persistance permet de conserver l'état utilisateur même après un rechargement de la page en utilisant Redux Persist avec le stockage local du navigateur.
* 
*/
const persistConfig = {
    key: 'root', // Clé de stockage dans le storage local
    storage, // Type de stockage utilisé
};

// Création d'un réducteur persistant pour le slice user
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

// Configuration du store Redux en utilisant le réducteur persistant
export const store = configureStore({
    reducer: {
        user: persistedReducer, // Utilisation du réducteur persistant pour le slice user
    },

});

// Création d'un persistor pour gérer la persistance du store
export const persistor = persistStore(store);