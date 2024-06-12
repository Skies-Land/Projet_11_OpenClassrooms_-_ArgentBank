import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { infoUserName } from '../../store/userSlice';

import Button from '../button/Button';
import { changeUser } from '../../services/api';

/** ===== EDIT NAME =====
* 
* Composant EditName pour permettre à l'utilisateur de modifier son nom.
*
* Ce composant permet à l'utilisateur de modifier son nom d'utilisateur et
* de soumettre les modifications. Il affiche également le nom actuel de l'utilisateur.
*
* @component
*/
const EditName = () => {
    const navigate = useNavigate(); // Hook pour la navigation

    const loginStore = useSelector((state) => state.login); // Récupération de l'état de connexion depuis le store Redux
    const storeUserProfil = loginStore.userProfil; // Données du profil utilisateur
    const dispatch = useDispatch(); // Hook pour dispatcher des actions Redux

    const [newUserName, setNewUserName] = useState(storeUserProfil.userName); // État local pour le nouveau nom d'utilisateur
    const token = loginStore.userToken; // Token utilisateur

    /** ===== HANDLE CHANGE USER =====
    * 
    * Gère le changement du nom d'utilisateur.
    *
    * Met à jour l'état local `newUserName` avec la valeur du champ de saisie.
    *
    * @param {object} e - L'événement de changement de saisie.
    */
    const handleChangeUser = (e) => {
        setNewUserName(e.target.value);
    };

    /** ===== HANDLE CANCEL =====
    * 
    * Gère l'annulation de la modification du nom.
    *
    * Redirige l'utilisateur vers la page utilisateur (/User).
    */
    const handleCancel = () => {
        navigate('/User');
    }

    /** ===== HANDLE SUBMIT FORM =====
    * 
    * Soumet le formulaire avec le nouveau nom d'utilisateur.
    *
    * Appelle l'API pour changer le nom d'utilisateur et met à jour le nom d'utilisateur dans le store Redux.
    *
    * @param {object} e - L'événement de soumission du formulaire.
    */
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const updateNameUser = await changeUser(newUserName, token); // Appel de l'API pour changer le nom d'utilisateur
        if (updateNameUser.status === 200) {
            dispatch(infoUserName(newUserName)); // Mise à jour du nom d'utilisateur dans le store Redux
            console.log("Changement du nom d'utilisateur effectué", updateNameUser.status);
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
* 1. Récupération des données utilisateur :
*    Utilisation de `useSelector` pour extraire les données utilisateur (`userProfil` et `userToken`) du store Redux.
*    `storeUserProfil` contient les données du profil utilisateur.
* 
* 2. Modification du nom d'utilisateur :
*    Le composant permet à l'utilisateur de saisir un nouveau nom d'utilisateur dans un champ de saisie.
*    La fonction `handleChangeUser` met à jour l'état local `newUserName` avec la valeur saisie par l'utilisateur.
*
* 3. Soumission du formulaire :
*    Lors de la soumission du formulaire, la fonction `handleSubmitForm` est appelée.
*    Cette fonction envoie une requête à l'API pour changer le nom d'utilisateur.
*    Si la requête est réussie (statut 200), le nom d'utilisateur dans le store Redux est mis à jour avec le nouveau nom.
*    Sinon, une erreur est affichée dans la console.
*
* 4. Annulation de la modification :
*    L'utilisateur peut annuler la modification en cliquant sur le bouton "Cancel".
*    La fonction `handleCancel` redirige l'utilisateur vers la page utilisateur (/User).
*
*/