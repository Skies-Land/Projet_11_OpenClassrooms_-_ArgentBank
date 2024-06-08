import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
    const token = useSelector((state) => state.login.userToken);
    return token ? children : <Navigate to="/SignInPage" />;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoutes;