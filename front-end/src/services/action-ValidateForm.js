import { changeUser } from "./api";
import { updateUserName } from "../redux/userSlice";

export const actionValidateForm = async (e, modifiedUserName, userToken, dispatch, onCancel) => {
    e.preventDefault();
    try {
        const updateNameUser = await changeUser(modifiedUserName, userToken);
        if (updateNameUser.status === 200) {
        dispatch(updateUserName(modifiedUserName));
        if (onCancel) onCancel();
        } else {
        console.error("Impossible de changer le nom d'utilisateur");
        }
    } catch (error) {
        console.error("Erreur de traitement lors du changement du nom d'utilisateur", error);
    }
};