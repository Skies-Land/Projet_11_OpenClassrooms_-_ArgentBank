import PropTypes from 'prop-types';

/** ===== BUTTON =====
* 
* Composant Button pour afficher un bouton.
*
* Ce composant affiche un bouton avec le texte spécifié.
*
* @component
* @param {object} props - Les propriétés du bouton.
* @param {string} props.btnText - Le texte affiché sur le bouton.
* @param {function} [props.onClick] - La fonction à exécuter lors du clic sur le bouton (optionnel).
* @param {string} [props.className] - La classe CSS à appliquer au bouton (optionnel).
* @returns {JSX.Element} - Un élément bouton JSX.
*/
const Button = ({ btnText, onClick, className }) => {
    return (
        <button 
            className={className} 
            onClick={onClick}>
                {btnText}
        </button>
    );
};

// Validation des types des props avec PropTypes passées au composant Button
Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
*
* 1. Propriétés du bouton :
*    `btnText` : Le texte affiché sur le bouton.
*    `onClick` : La fonction à exécuter lors du clic sur le bouton. Cette prop est facultative.
*    `className` : La classe CSS à appliquer au bouton. Cette prop est facultative.
* 
* 2. Validation des types de props :
*    Utilisation de `PropTypes` pour valider les types des props passées au composant.
*    La prop `btnText` est requise et doit être une chaîne de caractères.
*    Les props `onClick` et `className` sont facultatives. onClick doit être une fonction et className doit être une chaîne de caractères.
*
* 3. Rendu du bouton :
*    Le composant Button rend un élément bouton (`<button>`).
*    Le texte du bouton est défini par la prop `btnText`.
*    La classe CSS du bouton est définie par la prop `className`.
*    L'événement onClick est défini par la prop `onClick`, qui déclenche une fonction lorsque le bouton est cliqué.
*
*/