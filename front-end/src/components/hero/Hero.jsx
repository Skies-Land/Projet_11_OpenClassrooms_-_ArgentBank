/** ===== HERO =====
*
* Composant Hero pour afficher le contenu principal en vedette.
*
* Ce composant affiche un contenu en vedette avec des messages promotionnels,
* invitant les utilisateurs à ouvrir un compte d'épargne avec Argent Bank.
*
* @component
*/
const Hero = () => {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>

                {/* Messages promotionnels */}
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>

                {/* Message principal invitant les utilisateurs à ouvrir un compte d'épargne */}
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default Hero;

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Rendu du contenu promotionnel :
*    Le composant `Hero` rend un contenu en vedette avec des messages promotionnels.
*    Les messages promotionnels sont inclus dans une balise `p` avec la classe `subtitle`.
*    Chaque message est une invitation à découvrir les avantages d'ouvrir un compte d'épargne avec Argent Bank.
*
* 2. Message principal :
*    Un message principal est affiché pour inviter les utilisateurs à ouvrir un compte d'épargne avec Argent Bank.
*    Ce message est inclus dans une balise `p` avec la classe `text`.
*
* 3. Accessibilité :
*    Un titre de section avec la classe `sr-only` est inclus pour l'accessibilité, afin que les lecteurs d'écran puissent identifier le contenu comme étant du contenu en vedette, mais le rendre invisible pour les utilisateurs ordinaires.
* 
*/