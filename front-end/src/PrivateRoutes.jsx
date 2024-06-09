import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

/** ===== PRIVATE ROUTES =====
* 
* Composant PrivateRoutes pour protéger les routes nécessitant une authentification.
*
* Ce composant vérifie si l'utilisateur est authentifié en vérifiant la présence d'un token dans le store Redux.
* Si l'utilisateur est authentifié, il rend les enfants (composants protégés) passés en props.
* Sinon, il redirige l'utilisateur vers la page de connexion.
*
* @component
* @param {object} props - Les propriétés du composant.
* @param {React.ReactNode} props.children - Les composants enfants à rendre si l'utilisateur est authentifié.
* @returns {JSX.Element} - Les composants enfants si authentifié, sinon un composant Navigate pour rediriger vers la page de connexion.
*/
const PrivateRoutes = ({ children }) => {
    // Sélection du token utilisateur depuis le store Redux
    const token = useSelector((state) => state.login.userToken);

    // Si l'utilisateur a un token valide, rendre les enfants, sinon rediriger vers la page de connexion
    return token ? children : <Navigate to="/SignInPage" />;
};

// Validation des types des props avec PropTypes passées au composant PrivateRoutes
PrivateRoutes.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoutes;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Sélection du token utilisateur :
*    Utilisation du hook `useSelector` pour accéder au token utilisateur depuis le store Redux (`state.login.userToken`).
*
* 2. Rendu conditionnel :
*    Le composant vérifie si le token utilisateur est présent.
*    Si le token est présent, il rend les enfants (`children`) passés en props, ce qui permet d'afficher les composants protégés.
*    Si le token est absent, il redirige l'utilisateur vers la page de connexion (`/SignInPage`) en utilisant le composant `Navigate` de `react-router-dom`.
*
* 3. Validation des types avec PropTypes :
*    Utilisation de `PropTypes` pour valider les types des props passées au composant.
*    La prop `children` est de type `React.ReactNode`, ce qui signifie qu'elle peut contenir n'importe quel élément React.
*
*/