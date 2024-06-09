import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilisation du storage local
import userSlice from '../store/userSlice'; // Importation de userSlice

/** ===== PERSIST CONFIG =====
* 
* Configuration du store avec persistance permet de conserver l'état utilisateur même après un rechargement de la page en utilisant Redux Persist avec le stockage local du navigateur.
*
* @type {Object}
* @property {string} key - Clé racine de la configuration de persistance.
* @property {Object} storage - Type de stockage utilisé (localStorage dans ce cas).
* 
*/
const persistConfig = {
    key: 'root',
    storage,
};

/** ===== PERSISTED REDUCER =====
* 
* Réducteur persisté combinant la configuration de persistance et le slice utilisateur.
*
*/
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

/** ===== STORE CONFIG =====
* 
* Configuration du store Redux.
*
* Le store est configuré avec le réducteur persisté et une middleware personnalisée
* pour ignorer certaines actions de Redux Persist lors de la vérification de la sérialisation.
*
*/
export const store = configureStore({
    reducer: {
        login: persistedReducer, // Utilisation du réducteur persistant pour le slice user
    },

    /** ===== MIDDLEWARE CONFIG =====
    * 
    * - Middleware : La configuration du middleware dans ce code est utilisée pour gérer la sérialisation des actions et de l'état. En utilisant getDefaultMiddleware avec des paramètres personnalisés, le code ignore certaines actions spécifiques à redux-persist qui ne sont pas sérialisables.
    * - PersistReducer : Assure que le slice user persiste son état en utilisant le storage local.
    * - PersistStore : Synchronise le store avec le storage pour maintenir l'état utilisateur entre les rechargements de la page.
    * 
    */
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // Ignorer l'action de persistance de redux-persist
            ignoredActions: [
                "persist/PERSIST", 
                "persist/REHYDRATE", 
                "persist/PAUSE", 
                "persist/PURGE", 
                "persist/REGISTER", 
                "persist/FLUSH"
            ], 
        }
    }),

});

/** ===== PERSISTOR =====
* 
* Persister pour le store Redux.
*
* Ce persister est utilisé pour rehydrater le store à partir du stockage persistant.
*
*/
export const persistor = persistStore(store);

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
*
* 1. `persistConfig` :
*     La configuration de persistance (`persistConfig`) spécifie la clé de stockage racine (`key: 'root'`) et le type de stockage utilisé (`storage`). Ici, `storage` fait référence à `localStorage`.
* 
* 2. `persistedReducer` :
*    `persistedReducer` est un réducteur qui combine la configuration de persistance et le réducteur de `userSlice`. Cela permet de persister l'état du slice utilisateur dans `localStorage`.
* 
* 3. `configureStore :`
*    `configureStore de `@reduxjs/toolkit` configure le store Redux avec le réducteur persisté (`persistedReducer`).
*    La middleware par défaut est modifiée pour ignorer certaines actions spécifiques de Redux Persist lors de la vérification de la sérialisation (`serializableCheck`).
* 
* 4. `persistStore` :
*    `persistStore` crée un persister qui sera utilisé pour rehydrater le store Redux à partir du stockage persistant. Ce persister est exporté pour être utilisé dans le point d'entrée principal de l'application (`main.jsx`).
*
*/