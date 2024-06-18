import logo from "../../assets/img/argentBankLogo.webp";

// https://react-icons.github.io/react-icons/icons/lu/
import { LuLogOut } from "react-icons/lu";

import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { endSession } from "../../redux/userSlice";

const Navbar = () => {
    // Permet de dispatcher des actions Redux
    const dispatch = useDispatch();
    // Extraction de l'état de l'utilisateur depuis le store Redux
    const { userToken, userProfil } = useSelector((state) => state.user);

    const Disconnect = () => {
        // Supprime le token du localStorage pour déconnecter l'utilisateur
        localStorage.removeItem("token");
        // Dispatch l'action de déconnexion
        dispatch(endSession());
    };

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="login">
                {userProfil?.userName ? (
                <Link to="/User" className="userName">
                    <i className="fa fa-user-circle"></i>
                    <p>{userProfil.userName}</p>
                </Link>
                ) : null}
                {userToken ? (
                <NavLink className="main-nav-item" to="/" onClick={Disconnect}>
                    <LuLogOut />
                    Sign Out
                </NavLink>
                ) : (
                <NavLink className="main-nav-item" to="/SignInPage">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;