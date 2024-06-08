import Features from "../features/Features";
import Hero from "../hero/Hero";
import featuresData from "../../data/features.json";

const HomeMain = () => {
    const features = featuresData.features;
    return (
        <div>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
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