import Features from "../features/Features";
import Hero from "../hero/Hero";
import featuresData from "../../data/features.json";

/** ===== HOME MAIN =====
* 
* Composant principal de la page d'accueil.
*
* Ce composant rend la section principale de la page d'accueil, 
* comprenant un héros et une liste de fonctionnalités.
*
* @component
*/
const HomeMain = () => {
    const features = featuresData.features; // Données des fonctionnalités à partir du fichier JSON
    return (
        <div>
            <Hero /> {/* Composant Héros pour l'introduction */}
            <section className="features">
                <h2 className="sr-only">Features</h2>

                {/* 
                    Parcours des données des fonctionnalités et rendu de chaque fonctionnalité 
                    en utilisant le composant Features.
                */}
                {features.map((features, index) => (
                    <Features
                        key={"feature" + index}
                        image={features.image}
                        alt={features.alt}
                        title={features.title}
                        paragraph={features.paragraph}
                    />
                ))}            
            </section>
        </div>
    );
};

export default HomeMain;