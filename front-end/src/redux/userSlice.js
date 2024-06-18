import { createSlice } from '@reduxjs/toolkit';

// Définir l'état initial de la tranche d'utilisateur
const initialState = {
    userToken: null,
    userProfil: {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
    },
};

// Création de tranche d'utilisateur avec des reducers
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Authenticate user and set token
        authenticateUser: (state, action) => {
        state.userToken = action.payload;
        },
        // Fin de session de l'utilisateur
        endSession: (state) => {
        state.userToken = null;
        state.userProfil = {
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
            };
        },
        // Définir les informations du profil de l'utilisateur
        userInfo: (state, action) => {
        state.userProfil = action.payload;
        },
        // Mise à jour du nom d'utilisateur
        updateUserName: (state, action) => {
        state.userProfil.userName = action.payload;
        }
    },
});

export const { authenticateUser, endSession, userInfo, updateUserName } = userSlice.actions;

export default userSlice.reducer;