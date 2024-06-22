import { getAccounts, getUser } from "./api";
import { authenticateUser, userInfo } from "../redux/userSlice";

export const actionSubmitLogin = async (formData, dispatch, navigate, setError) => {
    const { email, password, rememberMe } = formData;
    try {
        // Récupération du token utilisateur à partir de l'API
        const { body: { token } } = await getAccounts(email, password);
        // Enregistrement du token dans le store Redux
        dispatch(authenticateUser(token));

        // Enregistrement du token dans le localStorage si l'utilisateur a choisi "Remember me"
        if (rememberMe) {
        localStorage.setItem("token", token);
        }

        // Récupération des informations utilisateur à partir de l'API
        const { body: userInformation } = await getUser(token);
        // Enregistrement des informations utilisateur dans le store Redux
        dispatch(userInfo(userInformation));

        // Redirection vers la page utilisateur après connexion réussie
        navigate("/User");
    } catch (error) {
        // Gestion des erreurs de connexion
        console.error("Le processus de connexion a rencontré une erreur", error);
        setError("Impossible de se connecter, veuillez vérifier votre email et votre mot de passe.");
    }
};