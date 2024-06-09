/** ===== FOOTER ===== 
* 
* Composant Footer pour afficher le pied de page.
*
* Ce composant affiche le pied de page avec le texte de droit d'auteur.
*
* @component
*/
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    );
};

export default Footer;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
*
* 1. Rendu du pied de page :
*    Le composant `Footer` rend le pied de page (`<footer>`).
*    Il inclut un paragraphe (`<p>`) avec la classe `footer-text`, qui affiche le texte de droit d'auteur "Copyright 2020 Argent Bank".
* 
*/ 