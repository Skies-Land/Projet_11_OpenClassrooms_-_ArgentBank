import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types"

// Composant d’ordre supérieur qui vérifie si l'utilisateur est connecté
// HOC => https://fr.legacy.reactjs.org/docs/higher-order-components.html

const WithAuthentication = ({children}) => {
    const Authenticated = useSelector(state => state.user.userProfil);

    if (Authenticated) {
        return children;
    } else {
        return <Navigate to="/SignInPage" />;
    }    
};

WithAuthentication.propTypes = {
    children: PropTypes.node.isRequired
};

export default WithAuthentication;