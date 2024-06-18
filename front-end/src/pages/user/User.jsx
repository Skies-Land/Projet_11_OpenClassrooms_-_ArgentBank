import React, { useState } from "react";
import { useSelector } from "react-redux";
import Accounts from "../../data/accounts.json";
import Account from "../../components/account/Account";
import Button from "../../components/button/Button";
import EditName from "../edit-name/EditName";

const User = () => {
    // Sélection de l'username depuis le store Redux
    const username = useSelector((state) => state.user.userProfil.userName);

    // État local pour gérer l'édition du nom
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour fermer le formulaire d'édition
    const exitEditMode = () => setIsEditing(false);

    // Fonction pour basculer l'état d'édition du nom
    const controlEditUser = (e) => {
        e.preventDefault();
        setIsEditing((prevState) => !prevState);
    };

    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1 className="title">Welcome back {username}</h1>
                <Button
                    className={"edit-button"}
                    btnText={"Edit Name"}
                    onClick={controlEditUser}
                />
                {isEditing && <EditName onCancel={exitEditMode} />}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {Accounts.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
};

export default User;