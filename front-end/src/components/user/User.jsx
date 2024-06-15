import React, { useState } from 'react'; // Importation de useState depuis React
import { useSelector } from 'react-redux'; // Importation de useSelector depuis Redux

// Importation du tableau du fichier JSON
import Accounts from '../../data/accounts.json';

// Importation de composants
import Account from '../account/Account';
import Button from '../button/Button';
import EditName from '../edit-name/EditName';

/** ===== USER =====
* 
* Composant User affichant le profil de l'utilisateur et ses comptes.
* 
* @component
* @returns {JSX.Element} Le composant User.
*/
const User = () => {
    // Récupération du nom d'utilisateur depuis le store Redux
    const username = useSelector(state =>(state.login.userProfil.userName));

    // État pour contrôler l'affichage du formulaire EditName
    const [isEditing, setIsEditing] = useState(false);

    /** ===== CLOSE EDIT FORM =====
    * Ferme le formulaire d'édition du nom d'utilisateur.
    */
    const closeEditForm = () => setIsEditing(false);

    /** ===== HANDLE EDIT USER =====
    * 
    * Gère l'affichage du formulaire d'édition du nom d'utilisateur.
    * 
    * @param {Event} e - L'événement de clic sur le bouton d'édition.
    */
    const handleEditUser = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1 className="title">Welcome back {username}</h1>
                <Button 
                    className={"edit-button"}
                    btnText={"Edit Name"}
                    onClick={handleEditUser}
                />
                {/* Déplacement du rendu conditionnel du composant EditName en dehors du bouton */}
                {isEditing && <EditName onCancel={closeEditForm} />}
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
* 1. Récupération du nom d'utilisateur depuis le store Redux :
*    `useSelector` permet d'accéder à l'état du store Redux. Ici, il est utilisé pour récupérer le nom d'utilisateur (`username`) à partir du profil utilisateur stocké dans Redux (`state.login.userProfil.userName`).
*
* 2. État local pour contrôler l'affichage du formulaire d'édition :
*    `useState` est utilisé pour créer un état local (`isEditing`) qui contrôle l'affichage du formulaire `EditName`. Cet état est initialisé à `false`.
*
* 3. Fermer le formulaire d'édition :
*    La fonction `closeEditForm` est utilisée pour fermer le formulaire d'édition en définissant `isEditing` à `false`.
*
* 4. Gérer l'affichage du formulaire d'édition :
*    La fonction `handleEditUser` est déclenchée lorsqu'on clique sur le bouton "Edit Name". Elle inverse l'état de `isEditing` pour afficher ou masquer le formulaire d'édition.
*
* 5. Rendu conditionnel du formulaire d'édition :
*    Le composant `EditName` est rendu de manière conditionnelle. Si `isEditing` est `true`, le formulaire d'édition est affiché. `onCancel` est passé comme prop pour permettre de fermer le formulaire à partir du composant `EditName`.
*
* 6. Affichage des comptes utilisateurs :
*    Les comptes sont rendus en itérant sur le tableau `Accounts` importé à partir d'un fichier JSON. Chaque compte est affiché en utilisant le composant `Account`, avec des props `title`, `amount`, et `description` passés à chaque instance.
*
*/