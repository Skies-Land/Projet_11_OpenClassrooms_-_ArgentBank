import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'

/** ===== MAIN =====
* 
* Point d'entrée principal de l'application.
*
* Ce fichier monte l'application React dans le DOM et configure le store Redux avec la persistance des données.
*/
// Rendu de l'application dans l'élément avec l'ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. `React.StrictMode` :
*    `React.StrictMode` est un wrapper pour détecter les problèmes potentiels dans l'application. Il active des vérifications et des avertissements supplémentaires en mode développement.
*
* 2. `Provider` de `react-redux` :
*    `Provider` est utilisé pour fournir le store Redux à toute l'application. Il permet à n'importe quel composant de l'application d'accéder au store Redux.
*
* 3. `PersistGate` de `redux-persist` :
*    `PersistGate` retarde le rendu de l'application jusqu'à ce que le state persistant soit récupéré et rehydraté. Cela assure que l'application ne soit pas rendue avant que le store Redux soit complètement prêt.
*    `loading={null}` indique qu'aucun composant de chargement particulier n'est rendu pendant la rehydratation.
*
* 4: Rendu dans l'élément DOM :
*    `ReactDOM.createRoot(document.getElementById('root')).render(...)` monte l'application React dans l'élément DOM avec l'ID `root`.
*
*/