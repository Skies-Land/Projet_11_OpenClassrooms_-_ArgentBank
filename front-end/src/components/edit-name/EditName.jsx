import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { infoUserName } from '../../store/userSlice';
import Button from '../button/Button';
import { changeUser } from '../../services/api';

/** ===== EDIT NAME =====
* 
* Ce composant permet à l'utilisateur de modifier son nom d'utilisateur et
* de soumettre les modifications. Il affiche également le nom actuel de l'utilisateur.
*
* @param {Object} props - Les propriétés du composant.
* @param {Function} props.onCancel - Fonction à appeler lors de l'annulation de l'édition.
* @returns {JSX.Element} Le composant EditName.
*/
const EditName = ({ onCancel }) => {
    // Récupération de l'état de connexion depuis le store Redux
    const loginStore = useSelector((state) => state.login);
    // Données du profil utilisateur 
    const storeUserProfil = loginStore.userProfil; 
    // Hook pour dispatcher des actions Redux
    const dispatch = useDispatch();
    // État local pour le nouveau nom d'utilisateur
    const [newUserName, setNewUserName] = useState(storeUserProfil.userName); 
    // Token utilisateur
    const token = loginStore.userToken;

    /** ===== HANDLE CHANGE USER =====
    * 
    * Gestion du changement de nom d'utilisateur.
    * 
    * @param {Event} e - L'événement de changement.
    */
    const handleChangeUser = (e) => {
        setNewUserName(e.target.value);
    };

    /** ===== HANDLE CANCEL =====
    * 
    * Gestion de l'annulation de l'édition.
    */
    const handleCancel = () => {
        if (onCancel) onCancel(); 
    }

    /** ===== HANDLE SUBMIT FORM =====
    * Gestion de la soumission du formulaire.
    * 
    * @param {Event} e - L'événement de soumission du formulaire.
    */
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        // Appel de l'API pour changer le nom d'utilisateur
        const updateNameUser = await changeUser(newUserName, token); 
        if (updateNameUser.status === 200) {
            // Mise à jour du nom d'utilisateur dans le store Redux
            dispatch(infoUserName(newUserName)); 
            console.log("Changement du nom d'utilisateur effectué", updateNameUser.status);
            // Ferme le formulaire si la mise à jour est réussie et si onCancel est fourni
            if (onCancel) onCancel(); 
        } else {
            console.error("Erreur lors du changement du nom d'utilisateur");
        }
    };

    return (
        <main className='main bg-dark'>
            <section className='sign-in-content toogle-edit-name'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Edit user info</h1>
                <form onSubmit={handleSubmitForm} onClick={(event) => event.stopPropagation()}>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            onChange={handleChangeUser}
                            placeholder='Enter your new username'
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            value={storeUserProfil.firstName}
                            disabled
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            value={storeUserProfil.lastName}
                            disabled
                        />
                    </div>
                    <Button btnText={'Save'} className={'sign-in-button'}/>
                </form>
                <Button btnText={'Cancel'} onClick={handleCancel} className={'sign-in-button'}/>
            </section>
        </main>
    )
};

export default EditName;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Accéder aux données du store Redux :
*   `useSelector` permet d'accéder à l'état du store Redux. Ici, il est utilisé pour récupérer l'état de connexion (`loginStore`) et les données du profil utilisateur (`storeUserProfil`).
*   `useDispatch` renvoie la fonction `dispatch` qui est utilisée pour envoyer des actions au store Redux.
*
* 2. Gérer l'état local pour le nouveau nom d'utilisateur :
*    `useState` est utilisé pour créer un état local pour le nouveau nom d'utilisateur. Cet état est initialisé avec le nom d'utilisateur actuel (`storeUserProfil.userName`).
*
* 3. Mettre à jour le nom d'utilisateur lors de la saisie :
*    La fonction `handleChangeUser` est appelée à chaque changement de valeur dans le champ de saisie du nom d'utilisateur. Elle met à jour l'état local `newUserName` avec la nouvelle valeur.
*
* 4. Annuler l'édition et fermer le formulaire :
*    La fonction `handleCancel` est appelée lorsque l'utilisateur annule l'édition. Elle appelle la fonction `onCancel` passée en tant que prop, si elle est fournie.
*
* 5. Soumettre le formulaire pour changer le nom d'utilisateur :
*    La fonction `handleSubmitForm` est appelée lors de la soumission du formulaire. Elle empêche le comportement par défaut de l'événement, appelle l'API pour changer le nom d'utilisateur, met à jour le store Redux si l'API renvoie un statut de succès, et appelle `onCancel` si fourni pour fermer le formulaire.
*
* 6. Rendre des boutons réutilisables pour les actions du formulaire :
*    Le composant `Button` est utilisé pour rendre des boutons dans le formulaire. Les boutons "Save" et "Cancel" utilisent ce composant.
*
*/