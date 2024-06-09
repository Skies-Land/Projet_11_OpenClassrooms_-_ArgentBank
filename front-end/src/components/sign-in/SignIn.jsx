import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { getAccounts, getUser } from '../../services/api';

// Import Redux
import { useDispatch } from 'react-redux';
import { loginUser, infoUser } from '../../store/userSlice';

/** ===== SIGN IN =====
* 
* Composant de connexion pour l'application.
*
* Ce composant gère l'état des champs d'email et de mot de passe, 
* ainsi que la connexion de l'utilisateur via les services API.
*
* @component
*/
const SignIn = () => {
    // Déclaration des états pour l'email, le mot de passe, le bouton "Remember Me" et les erreurs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remenberMe, setRemenberMe] = useState(false);
    const [erreur, setErreur] = useState("");
    const navigate = useNavigate(); // Hook pour naviguer entre les pages
    const dispatch = useDispatch(); // Hook pour dispatcher les actions Redux

    /** ===== HANDLE LOGIN =====
    * 
    * Gère la soumission du formulaire de connexion.
    *
    * @param {Event} e - L'événement de soumission du formulaire.
    * @async
    */
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Appel à l'API pour obtenir les données de l'utilisateur
            const userData = await getAccounts(email, password);
            const token = userData.body.token;
            // Dispatch de l'action loginUser avec le token
            await dispatch(loginUser(token));
            // Enregistrement du token dans le localStorage si "Remember Me" est coché
            if (remenberMe) {
                localStorage.setItem("token", token);
            }

            // Appel à l'API pour obtenir les informations utilisateur
            const userInfo = await getUser(token);
            const userinfos = {
                email: userInfo.body.email,
                userName: userInfo.body.userName,
                firstName: userInfo.body.firstName,
                lastName: userInfo.body.lastName,
            };
            // Dispatch de l'action infoUser avec les informations utilisateur
            await dispatch(infoUser(userinfos));
            // Navigation vers la page utilisateur après la connexion réussie
            navigate("/User");
        } catch (error) {
            console.error("Une erreur est survenu lors de la connexion", error);
            // Mise à jour de l'état d'erreur pour afficher le message d'erreur
            setErreur("Identifiants incorrects");
        }
    };

    /** ===== HANDLE REMEMBER ME =====
    * 
    * Gère la mise à jour de l'état "Remember Me".
    *
    * @param {Event} e - L'événement de changement de la case à cocher.
    */
    const handleRememberMe = (e) => {
        setRemenberMe(e.target.checked);
    };

    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Sign In</h1>

                <form onSubmit={handleLogin}>
                    <div className='input-wrapper'>
                        <label htmlFor='userEmail'>User Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=' Your email address'
                            required
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-remember'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            checked={remenberMe}
                            onChange={handleRememberMe}
                        />
                        <label htmlFor='rememberMe'>Remember me</label>
                    </div>
                    <Button btnText={"Sign In"} className={"sign-in-button"} />
                </form>
                {erreur && <p className='problemConexion'>{erreur}</p>}
            </section>
        </main>
    );
};

export default SignIn;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Importations :
*    `useState` et `useNavigate` sont importés de React pour gérer l'état et la navigation.
*    `Button` est un composant personnalisé pour le bouton de soumission.
*    `getAccounts` et `getUser` sont des fonctions d'appel API pour gérer la connexion et récupérer les informations utilisateur.
*    `useDispatch` est importé de Redux pour dispatcher des actions.
*    `loginUser` et `infoUser` sont des actions définies dans `userSlice` pour gérer l'état utilisateur dans Redux.
* 
* 2. Hooks d'état :
*    `useState` est utilisé pour gérer les valeurs de l'email, du mot de passe, du checkbox "Remember Me", et des erreurs.
* 
* 3. `handleLogin` :
*    Empêche le comportement par défaut du formulaire.
*    Appelle `getAccounts` avec l'email et le mot de passe pour obtenir un token.
*    Dispatch l'action `loginUser` avec le token.
*    Si "Remember Me" est coché, enregistre le token dans `localStorage`.
*    Appelle `getUser` avec le token pour obtenir les informations utilisateur.
*    Dispatch l'action `infoUser` avec les informations utilisateur.
*    Navigue vers la page utilisateur en cas de succès.
*    En cas d'erreur, affiche un message d'erreur.
*
* 4. `handleRememberMe` :
*    Met à jour l'état `rememberMe` quand la case à cocher est modifiée.
*
* 5. Rendu :
*    Retourne le formulaire de connexion avec les champs pour l'email, le mot de passe et la case "Remember Me".
*    Inclut un bouton de soumission et affiche un message d'erreur en cas de besoin.
*
*/