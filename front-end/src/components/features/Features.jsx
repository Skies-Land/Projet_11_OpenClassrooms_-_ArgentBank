import { PropTypes } from "prop-types";

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

Features.propTypes = {
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Features;