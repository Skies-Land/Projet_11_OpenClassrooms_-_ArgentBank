import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import { actionValidateForm } from "../../services/action-ValidateForm";

const EditName = ({ onCancel }) => {
  // Sélection des données utilisateur depuis Redux
  const { userProfil, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // État local pour le nouveau nom d'utilisateur
  const [modifiedUserName, setModifiedUserName] = useState(userProfil.userName);

  // Fonction pour gérer le changement de nom d'utilisateur
  const editUserName = (e) => {
    setModifiedUserName(e.target.value);
  };

  // Fonction pour annuler et fermer le formulaire d'édition
  const cancelEdit = () => {
    if (onCancel) onCancel();
  };

  // Fonction pour soumettre le formulaire d'édition
  const validateForm = async (e) => {
    actionValidateForm(e, modifiedUserName, userToken, dispatch, onCancel);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content toogle-edit-name">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit user info</h1>
        <form onSubmit={validateForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={modifiedUserName}
              onChange={editUserName}
              placeholder="Enter your new username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userProfil.firstName}
              disabled
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={userProfil.lastName}
              disabled
            />
          </div>
          <Button btnText={"Save"} className={"sign-in-button"} />
        </form>
        <Button
          btnText={"Cancel"}
          onClick={cancelEdit}
          className={"sign-in-button"}
        />
      </section>
    </main>
  );
};

export default EditName;