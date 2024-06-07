import { createSlice } from '@reduxjs/toolkit';

/** ===== USER SLICE =====
* 
* `userSlice` utilise Redux Toolkit pour créer un slice nommé "login" qui gère l'état utilisateur
* avec des actions pour se connecter, se déconnecter, mettre à jour les informations de profil et le nom d'utilisateur.
* 
* Il simplifie la création de reducers et d'actions en utilisant createSlice de (@reduxjs/toolkit), 
* ce qui permet une gestion plus claire et concise de l'état de l'application. 
* 
*/
export const userSlice = createSlice({
    name: "login", // Nom du slice
    initialState: { // État initial géré par ce slice
        userToken: null,
        userProfil: null,
    },

    reducers: { // Réducteurs définissant comment l'état change en réponse aux actions
        loginUser: (state, action) => {
            state.userToken = action.payload; // Mise à jour de l'état avec le token utilisateur
        },

        logoutUser: (state) => {
            state.userToken = null; 
            state.userProfil = null; // Réinitialisation de l'état lors de la déconnexion
        },

        infoUser: (state, action) => {
            state.userProfil = action.payload; // Mise à jour des informations du profil utilisateur
        },

        infoUserName: (state, action) => {
            state.userProfil.userName = action.payload; // Mise à jour du nom de l'utilisateur dans le profil
        }
    },
});

// Exportation des actions générées par createSlice pour les utiliser dans d'autres fichiers
export const { loginUser, logoutUser, infoUser, infoUserName } = userSlice.actions;

// Exportation du reducer généré par createSlice pour l'utiliser dans le store
export default userSlice;