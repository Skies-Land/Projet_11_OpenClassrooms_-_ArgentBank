import { PropTypes } from "prop-types";

/** ===== FEATURES ===== 
* 
* Composant Features pour afficher une fonctionnalité.
*
* Ce composant affiche une fonctionnalité avec une icône, un titre et un paragraphe.
*
* @component
* @param {object} props - Les propriétés de la fonctionnalité.
* @param {string} props.image - L'URL de l'image représentant l'icône de la fonctionnalité.
* @param {string} props.alt - Le texte alternatif de l'image.
* @param {string} props.title - Le titre de la fonctionnalité.
* @param {string} props.paragraph - Le paragraphe décrivant la fonctionnalité.
*/
const Features = ({ image, alt, title, paragraph }) => {
    return (
        <div className="feature-item">
            <img 
                className="feature-icon"
                src={image} 
                alt={alt}
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

// Validation des types des props avec PropTypes passées au composant Features
Features.propTypes = {
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Features;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Propriétés du composant :
*   `image` : L'URL de l'image représentant l'icône de la fonctionnalité.
*   `alt` : Le texte alternatif de l'image pour l'accessibilité.
*   `title` : Le titre de la fonctionnalité.
*   `paragraph` : Le paragraphe décrivant la fonctionnalité.
*
* 2. Validation des types de props :
*    Utilisation de `PropTypes` pour valider les types des props passées au composant.
*    Toutes les props sont requises et doivent être de type `string`.
*
*/