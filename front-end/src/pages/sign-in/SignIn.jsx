import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { getAccounts, getUser } from "../../services/api";
import { useDispatch } from "react-redux";
import { authenticateUser, userInfo } from "../../redux/userSlice";

const SignIn = () => {
  // Gestion des états pour le formulaire de connexion
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  // État pour gérer les messages d'erreur
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fonction pour gérer les changements dans les champs de formulaire
  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const submitLogin = async (e) => {
    e.preventDefault();
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

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={inputChange}
              placeholder="Your email address"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={inputChange}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={inputChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Button btnText={"Sign In"} className={"sign-in-button"} />
        </form>
        {error && <p className="problemConexion">{error}</p>}
      </section>
    </main>
  );
};

export default SignIn;