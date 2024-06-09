import logo from "../../assets/img/argentBankLogo.png";
import { LuLogOut } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";

const Navbar = () => {

    const dispatch = useDispatch();

    const loginStore = useSelector((state) => state.login);

    const token = useSelector((state) => state.login.userToken);

    const handleRedirection = () => {
        localStorage.removeItem("token");
        console.log("Déconnexion de l'utilisateur");
        dispatch(logoutUser());
    };

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img 
                    className="main-nav-logo-image" 
                    src={logo} 
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div>
                <div className="login">
                    {loginStore &&
                        loginStore.userProfil &&
                        loginStore.userProfil.userName && (
                            <Link to="/User" className="userName">
                                <i className="fa fa-user-circle"></i>
                                <p>{loginStore.userProfil.userName}</p>
                            </Link>
                        )}
                    {token ? (
                        <NavLink 
                            className="main-nav-item" 
                            to="/" 
                            onClick={handleRedirection}>
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
            </div>
        </nav>
    );
};

export default Navbar;