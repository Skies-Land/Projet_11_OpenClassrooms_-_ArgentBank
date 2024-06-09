//#region - /* ===== VÉRIFICATION DE FETCH ===== */
if (!window.fetch) {
  alert("Your browser does not support fetch API");
}
//#endregion

/** ===== API_URL =====
* 
* URL de base de l'API.
* @constant {string}
*/
const API_URL = "http://localhost:3001/api/v1";

/** ===== GET ACCOUNTS =====
* 
* Fonction permettant d'envoyer une requête POST à l'endpoint de connexion avec l'email et le mot de passe fournis.
*
* @async
* @function getAccounts
* @param {string} email - L'email de l'utilisateur.
* @param {string} password - Le mot de passe de l'utilisateur.
* @returns {Promise<Object>} Les données de réponse de l'API si la connexion réussit.
* @throws {Error} Si la connexion échoue ou si une erreur réseau se produit.
*/
export const getAccounts = async (email, password) => {
  const requestUrl = `${API_URL}/user/login`;
  const requestHeaders = {
    "Content-Type": "application/json",
  };
  const requestBody = JSON.stringify({
    email,
    password,
  });

  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Échec de la connexion");
    }
  } catch (error) {
    if (error.message === "Échec de fetch") {
      throw Error("Une erreur de réseau s'est produite, veuillez réessayer plus tard");
    }
    throw error;
  }
};

/** ===== GET USER =====
* 
* Fonction permettant de récupérer le profil de l'utilisateur après la connexion en utilisant un jeton d'authentification (token).
*
* @async
* @function getUser
* @param {string} token - Le jeton d'authentification de l'utilisateur.
* @returns {Promise<Object>} Les données de réponse de l'API contenant le profil utilisateur.
* @throws {Error} Si la requête échoue ou si une erreur réseau se produit.
*/
export const getUser = async (token) => {
  const requestUrl = `${API_URL}/user/profile`;
  const requestHeaders = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: requestHeaders,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    if (response.status === 401) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    } else {
      console.log(response);
      throw new Error("Échec de la récupération du profil de l'utilisateur");
    }
  } catch (error) {
    throw error;
  }
};

/** ===== CHANGE USER =====
* 
* Fonction permettant de mettre à jour le nom d'utilisateur en envoyant une requête PUT à l'endpoint du profil avec le nouveau nom d'utilisateur et le jeton d'authentification (token) fournis.
*
* @async
* @function changeUser
* @param {string} token - Le jeton d'authentification de l'utilisateur.
* @param {string} newUserName - Le nouveau nom d'utilisateur à définir.
* @returns {Promise<Object>} Les données de réponse de l'API après la mise à jour du profil utilisateur.
* @throws {Error} Si la requête échoue ou si une erreur réseau se produit.
*/
export const changeUser = async (token, newUserName) => {
  const requestUrl = `${API_URL}/user/profile`;
  const requestHeaders = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const requestBody = JSON.stringify({
    userName: newUserName,
  });

  try {
    const response = await fetch(requestUrl, {
      method: "PUT",
      headers: requestHeaders,
      body: requestBody,
    });

    if (response.ok) {
      const data = await response.json();
      const userProfile = data.body;
      console.log(userProfile);
      return data;
    } else {
      throw new Error("Échec de la mise à jour du nom d'utilisateur");
    }
  } catch (error) {
    throw error;
  }
};