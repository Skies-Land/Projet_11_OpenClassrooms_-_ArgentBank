//#region - /* ===== VÉRIFICATION DE FETCH ===== */
if (!window.fetch) {
    alert("Your browser does not support fetch API");
}
//#endregion

/*=============== ADDRESS API ===============*/
const API_BASE_URL = 'http://localhost:3001/api/v1';

/** ===== GET ACCOUNTS =====
* 
* Fonction permettant d'envoyer une requête POST à l'endpoint de connexion avec l'email et le mot de passe fournis.
*
* @param {string} email - L'email de l'utilisateur.
* @param {string} password - Le mot de passe de l'utilisateur.
* @returns {Promise<Object>} La réponse du serveur sous forme d'objet JSON.
*/
export async function getAccounts(email, password) {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    });
    return response.json();
}

/** ===== GET USER =====
* 
* Fonction permettant de récupérer le profil de l'utilisateur après la connexion
*
* @param {string} token - Le token pour l'autorisation.
* @returns {Promise<Object>} La réponse du serveur sous forme d'objet JSON.
*/
export async function getUser(token) {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    return response.json();
}

/** ===== CHANGE USER =====
* 
* Fonction permettant de changer le nom d'utilisateur en envoyant une requête PUT à l'endpoint du profil avec le nouveau nom d'utilisateur et le token fournis.
*
* @param {string} newUsername - Le nouveau nom d'utilisateur.
* @param {string} token - Le token pour l'autorisation.
* @returns {Promise<Object>} La réponse du serveur sous forme d'objet JSON.
*/
export async function changeUser(newUsername, token) {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName: newUsername}),
    });
    return response.json();
}