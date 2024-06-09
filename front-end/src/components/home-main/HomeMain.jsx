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

/** ===== EXPLICATIONS SUPPLÉMENTAIRES =====
* 
* 1. Importations :
*    `Features` : Composant pour afficher les fonctionnalités.
*    `Hero` : Composant pour l'introduction de la page.
*    `featuresData` : Importation des données des fonctionnalités à partir du fichier JSON local.
*
* 2. Données des fonctionnalités :
*    `features` : Contient les données des fonctionnalités extraites de `featuresData.features`.
*
* 3. Rendu :
*    La balise `div` contient l'ensemble du contenu de la page d'accueil.
*    `Hero` est rendu en premier pour l'introduction de la page.
*    La balise `section` contient la liste des fonctionnalités.
*    Un titre de la section avec la classe `sr-only` est inclus pour l'accessibilité.
*    Les fonctionnalités sont rendues en parcourant les données `features` et en utilisant le composant `Features`. Chaque fonctionnalité est représentée par une instance de `Features`, avec les propriétés `image`, `alt`, `title`, et `paragraph`.
* 
*/