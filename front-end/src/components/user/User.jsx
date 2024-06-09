import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Importation du tableau du fichier JSON
import Accounts from '../../data/accounts.json'; 
// Importation du composant
import Account from '../account/Account';

import Button from '../button/Button';

/** ===== USER =====
* 
* Composant User pour afficher les informations de l'utilisateur connecté.
*
* Ce composant affiche un message de bienvenue avec le nom de l'utilisateur,
* un bouton pour éditer le nom de l'utilisateur, et une liste des comptes de l'utilisateur.
*
* @component
*/
const User = () => {
    // Récupération du nom d'utilisateur depuis le store Redux
    const username = useSelector(state =>(state.login.userProfil.userName));

    const navigate = useNavigate(); // Hook pour naviguer entre les pages

    /** ===== HANDLE EDIT USER =====
    * 
    * Gère la redirection vers la page de modification de l'utilisateur.
    *
    * @param {Event} e - L'événement de clic sur le bouton d'édition.
    */
    const handleEditUser = (e) => {
        e.preventDefault();
        navigate('/editUser');
    };

    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1 className="title">Welcome back {username}</h1>
                <Button 
                    className={"edit-button"}
                    btnText={"Edit Name"}
                    onClick={handleEditUser}>
                </Button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {Accounts.map((account, index) => (
                <Account 
                    key={"account"+index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
};

export default User;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Importations :
*    `useNavigate` de React Router pour la navigation entre les pages.
*    `useSelector` de Redux pour accéder au state global.
*    `Accounts` importé depuis un fichier JSON local contenant des données de compte.
*    `Account` et Button sont des composants personnalisés.
* 
* 2. Récupération du nom d'utilisateur :
*    `useSelector` est utilisé pour accéder au state Redux et récupérer le nom d'utilisateur à partir de `state.login.userProfil.userName`.
*
* 3. `handleEditUser` :
*    Empêche le comportement par défaut du bouton.
*    Utilise `navigate` pour rediriger vers la page `/editUser`.
*
* 4. Rendu :
*    Retourne un `main` avec une classe de style `bg-dark2`.
*    Affiche un titre de bienvenue avec le nom d'utilisateur.
*    Inclut un bouton pour éditer le nom de l'utilisateur, qui déclenche `handleEditUser` au clic.
*    Affiche une liste des comptes en parcourant le tableau `Accounts` et en rendant un composant `Account` pour chaque élément.
*
*/