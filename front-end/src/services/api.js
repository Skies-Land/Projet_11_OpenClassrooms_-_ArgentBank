//#region - /* ===== VÉRIFICATION DE FETCH ===== */
if (!window.fetch) {
  alert("Your browser does not support fetch API");
}
//#endregion

// URL de base de l'API.
const API_URL = "http://localhost:3001/api/v1/user";

// Envoi d'une requête POST à l'endpoint de connexion avec l'email et le mot de passe fournis.
export const getAccounts = async (email, password) => {
  const requestUrl = `${API_URL}/login`;
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

// Envoi d'une requête POST pour récupérer le profil utilisateur après la connexion en utilisant un jeton d'authentification (token).
export const getUser = async (token) => {
  const requestUrl = `${API_URL}/profile`;
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

// Envoie d'une requête PUT pour changer le nom d'utilisateur de l'utilisateur.
export async function changeUser (newUserName,token){
  const requestUrl = `${API_URL}/profile`;
  const response = await fetch(requestUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName: newUserName }),
  });
  return response.json();
}