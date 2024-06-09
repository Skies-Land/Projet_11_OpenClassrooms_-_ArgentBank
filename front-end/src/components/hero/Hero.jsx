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