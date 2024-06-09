import Navbar from "../navbar/Navbar";

/** ===== HEADER =====
* 
* Composant Header pour afficher l'en-tête de la page.
*
* Ce composant affiche la barre de navigation en tant qu'en-tête de la page.
*
* @component
*/
const Header = () => {
    return (
        <header>
            <Navbar /> {/* Rendu de la barre de navigation */}
        </header>
    );
};

export default Header;