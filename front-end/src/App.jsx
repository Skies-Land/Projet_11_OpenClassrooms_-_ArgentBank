import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./components/home-main/HomeMain.jsx";
import SignInPage from "./components/sign-in/SignIn.jsx";
import User from "./components/user/User.jsx";
import EditName from "./components/edit-name/EditName.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

/** ===== APP =====
* 
* Composant principal de l'application.
*
* Ce composant gère les routes de l'application et le rendu des composants en fonction des routes.
*
* @component
* @returns {JSX.Element} - L'application complète avec les routes et les composants.
*/
const App = () => {
  // Sélection du profil utilisateur depuis le store Redux
  const userProfil = useSelector(state =>state.login.userProfil)

  /** ===== REDIRECT IF CONNECTED =====
   * 
   * Redirige l'utilisateur vers la page User s'il est déjà connecté.
   *
   * @returns {JSX.Element|null} - Un composant Navigate si l'utilisateur est connecté, sinon null.
   */
  const redirectIfConnected = () => {
    if (userProfil) {
      return <Navigate to ='/User' />;
    }
    return null;
  };


  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} 
          />

          {/* Route pour la page de connexion */}
          <Route 
            path="/SignInPage" 
            element={
              <>
                {redirectIfConnected()}
                <SignInPage />
              </>
            }
          />

          {/* Route pour la page utilisateur -- protégée -- */}
          <Route 
            path="/User" 
            element={
              <PrivateRoutes>
                <User />
              </PrivateRoutes>
            } 
          />

          {/* Route pour la page de modification du nom utilisateur -- protégée -- */}
          <Route 
            path="/EditName" 
            element={
              <PrivateRoutes>
                <EditName />
              </PrivateRoutes>
            }
          />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Sélection du profil utilisateur :
*    Utilisation du hook `useSelector` pour accéder au profil utilisateur depuis le store Redux.
*
* 2. Redirection si connecté :
*    La fonction `redirectIfConnected` redirige l'utilisateur vers la page `/User` s'il est déjà connecté en utilisant le composant `Navigate` de `react-router-dom`.
*
* 3. Validation des types avec PropTypes :
*    Utilisation de `BrowserRouter` pour gérer les routes de l'application.
*    Le `Header` est inclus en haut de toutes les pages.
*    Les routes sont définies à l'aide de `Routes` et `Route` :
*      - La route `/` rend la page d'accueil `HomePage`.
*      - La route `/SignInPage` rend la page de connexion `SignInPage` avec une redirection si l'utilisateur est déjà connecté.
*      - Les routes `/User` et `/EditName` sont protégées par le composant `PrivateRoutes` et rendent respectivement les composants `User` et `EditName`.
*    Le `Footer` est inclus en bas de toutes les pages.
*
*/