import { createSlice } from '@reduxjs/toolkit';

/** ===== USER SLICE =====
* 
* Slice utilisateur pour gérer l'état de l'authentification et des informations de profil.
*
* Ce slice inclut les actions et les réducteurs pour gérer le token utilisateur,
* les informations de profil et la déconnexion.
* 
*/
export const userSlice = createSlice({
    name: "login", // Nom du slice
    initialState: { // État initial géré par ce slice
        userToken: null, // Token d'authentification de l'utilisateur
        userProfil: null, // Profil de l'utilisateur
    },

    reducers: { // Réducteurs définissant comment l'état change en réponse aux actions

        /** ===== LOGIN USER =====
        * 
        * Action pour connecter l'utilisateur.
        * 
        * @param {Object} state - État actuel du slice.
        * @param {Object} action - Action contenant le payload avec le token utilisateur.
        */
        loginUser: (state, action) => {
            state.userToken = action.payload; // 
        },

        /** ===== LOGOUT USER =====
        * 
        * Action pour déconnecter l'utilisateur.
        * 
        * @param {Object} state - État actuel du slice.
        */
        logoutUser: (state) => {
            state.userToken = null; 
            state.userProfil = null;
        },

        /** ===== INFO USER =====
        * 
        * Action pour mettre à jour les informations de l'utilisateur.
        * 
        * @param {Object} state - État actuel du slice.
        * @param {Object} action - Action contenant le payload avec les informations utilisateur.
        */
        infoUser: (state, action) => {
            state.userProfil = action.payload;
        },

        /** ===== INFO USER NAME =====
        * 
        * Action pour mettre à jour le nom d'utilisateur.
        * 
        * @param {Object} state - État actuel du slice.
        * @param {Object} action - Action contenant le payload avec le nouveau nom d'utilisateur.
        */
        infoUserName: (state, action) => {
            state.userProfil.userName = action.payload;
        }
    },
});

/** ===== EXPORT DES ACTIONS =====
* 
* Actions générées par le slice utilisateur.
* 
* @typedef {Object} UserActions
* @property {Function} loginUser - Action pour connecter l'utilisateur.
* @property {Function} logoutUser - Action pour déconnecter l'utilisateur.
* @property {Function} infoUser - Action pour mettre à jour les informations de l'utilisateur.
* @property {Function} infoUserName - Action pour mettre à jour le nom d'utilisateur.
* @type {UserActions}
*/
export const { loginUser, logoutUser, infoUser, infoUserName } = userSlice.actions;


export default userSlice;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1 `initialState` :
*   L'état initial du slice contient `userToken` et `userProfil`, initialisés à `null`. `userToken` stocke le token d'authentification de l'utilisateur et `userProfil` stocke les informations de profil de l'utilisateur.
*
* 2 `reducers` :
*   Les réducteurs définissent comment l'état du slice doit changer en réponse aux actions.
*   `loginUser` : Met à jour `userToken` avec le token utilisateur fourni dans le payload de l'action.
*   `logoutUser` : Réinitialise `userToken` et `userProfil` à `null`, déconnectant ainsi l'utilisateur.
*   `infoUser` : Met à jour `userProfil` avec les informations utilisateur fournies dans le payload de l'action.
*   `infoUserName` : Met à jour le `userName` dans `userProfil` avec le nouveau nom d'utilisateur fourni dans le payload de l'action. Ajout d'une vérification pour s'assurer que `userProfil` n'est pas `null`.
*
* 3 `userSlice.actions` :
*   Les actions générées par `createSlice` sont exportées pour être utilisées dans les composants pour dispatcher les actions.
* 
*/