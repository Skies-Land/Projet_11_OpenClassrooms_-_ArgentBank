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

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
*  
* 1. Importation de la barre de navigation :
*    Le composant `Header` importe et utilise le composant `Navbar` pour afficher la barre de navigation.
*
* 2. Rendu dans l'en-tête :
*    Le composant `Header` est un élément de l'en-tête (`<header>`).
*    Il inclut le rendu du composant `Navbar`, qui est la barre de navigation de la page.
* 
*/