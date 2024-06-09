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