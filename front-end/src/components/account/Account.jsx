import { PropTypes } from "prop-types";
import Button from "../button/Button";

/** ===== ACCOUNT =====
* 
* Composant Account pour afficher les détails d'un compte.
*
* Ce composant affiche les détails d'un compte, tels que le titre, le montant et la description,
* ainsi qu'un bouton pour afficher les transactions.
*
* @component
* @param {object} props - Les propriétés du compte.
* @param {string} props.title - Le titre du compte.
* @param {string} props.amount - Le montant du compte.
* @param {string} props.description - La description du compte.
* @returns {JSX.Element} - Un élément section JSX représentant les détails du compte.
*/
const Account = ({ title, amount, description }) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>

            <div className="account-content-wrapper cta">
                <Button 
                    className={"transaction-button"}
                    btnText={"View transaction"}>
                </Button>
            </div>
        </section>
    );
};

// Validation des types des props avec PropTypes passées au composant Account
Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Account;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Propriétés du compte :
*    `title` : Le titre du compte.
*    `amount` : Le montant du compte.
*    `description` : La description du compte.
* 
* 2. Validation des types de props :
*    Utilisation de `PropTypes` pour valider les types des props passées au composant.
*    Toutes les props (`title`, `amount`, `description`) sont requises et doivent être des chaînes de caractères.
*
* 3. Rendu du compte :
*    Le composant Account rend un élément section (`<section>`) représentant les détails du compte.
*    Il inclut le titre, le montant et la description du compte, ainsi qu'un bouton pour afficher les transactions.
*
*/