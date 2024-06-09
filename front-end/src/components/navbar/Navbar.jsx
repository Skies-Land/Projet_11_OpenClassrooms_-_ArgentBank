import logo from "../../assets/img/argentBankLogo.png";
import { LuLogOut } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";

/** ===== NAVBAR =====
* 
* Composant Navbar pour afficher la barre de navigation.
*
* Ce composant gère l'affichage de la barre de navigation en fonction de l'état de connexion de l'utilisateur.
*
* @component
*/
const Navbar = () => {
    const dispatch = useDispatch(); // Hook pour dispatcher des actions Redux

    // Récupération de l'état de connexion depuis le store Redux
    const loginStore = useSelector((state) => state.login);

    // Récupération du token utilisateur depuis le store Redux
    const token = useSelector((state) => state.login.userToken);

    /** ===== HANDLE REDIRECTION =====
    * 
    * Gère la déconnexion de l'utilisateur.
    *
    * Supprime le token de l'utilisateur du localStorage et dispatch l'action de déconnexion.
    */
    const handleRedirection = () => {
        localStorage.removeItem("token");
        console.log("Déconnexion de l'utilisateur");
        dispatch(logoutUser());
    };

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img 
                    className="main-nav-logo-image" 
                    src={logo} 
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div>
                <div className="login">
                    {/* 
                        Si l'utilisateur est connecté (loginStore.userProfil.userName),
                        afficher son nom avec une icône et un lien vers la page utilisateur.
                    */}
                    {loginStore &&
                        loginStore.userProfil &&
                        loginStore.userProfil.userName && (
                            <Link to="/User" className="userName">
                                <i className="fa fa-user-circle"></i>
                                <p>{loginStore.userProfil.userName}</p>
                            </Link>
                        )}
                    {/* 
                        Si un token est présent (utilisateur connecté), afficher le lien de déconnexion
                        avec l'icône de déconnexion et le texte "Sign Out". Sinon, afficher le lien de 
                        connexion avec l'icône utilisateur et le texte "Sign In".
                    */}
                    {token ? (
                        <NavLink 
                            className="main-nav-item" 
                            to="/" 
                            onClick={handleRedirection}>
                            <LuLogOut />
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink className="main-nav-item" to="/SignInPage">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. `<nav className="main-nav">` :
*    La balise `nav` contient l'ensemble de la barre de navigation et utilise la classe `main-nav` pour le style.
* 
* 2. Logo de la banque :
*    Utilise `NavLink` pour rendre le logo cliquable, redirigeant vers la page d'accueil (`"/"`).
*    `img` affiche le logo de la banque en utilisant l'importation `logo`.
*    `h1` avec la classe `sr-only` est utilisé pour l'accessibilité, afin que les lecteurs d'écran puissent lire "Argent Bank".
* 
* 3. Bloc de connexion :
*    La `div` avec la classe `login` contient les éléments relatifs à la connexion de l'utilisateur.
*
* 4. Affichage du nom d'utilisateur :
*    Si `loginStore` et `loginStore.userProfil.userName` existent (ce qui signifie que l'utilisateur est connecté), affiche un lien (`<Link>`) vers la page utilisateur (`"/User"`).
*    Le lien contient une icône utilisateur (`<i className="fa fa-user-circle"></i>`) et le nom d'utilisateur (`<p>{loginStore.userProfil.userName}</p>`).
*
* 5. Lien de déconnexion ou de connexion :
*    Si `token` est présent (ce qui signifie que l'utilisateur est connecté), affiche un lien (`<NavLink>`) pour déconnecter l'utilisateur.
*       - Le lien redirige vers la page d'accueil (`"/"`) et déclenche la fonction `handleRedirection` au clic.
*       - Utilise `LuLogOut` pour afficher l'icône de déconnexion et affiche le texte "Sign Out".
*    Si `token` n'est pas présent (ce qui signifie que l'utilisateur n'est pas connecté), affiche un lien (`<NavLink>`) vers la page de connexion (`"/SignInPage"`).
*    Utilise une icône utilisateur (`<i className="fa fa-user-circle"></i>`) et affiche le texte "Sign In".
*
*/