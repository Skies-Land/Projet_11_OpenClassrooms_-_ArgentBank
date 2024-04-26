import logo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav class="main-nav">
            <NavLink class="main-nav-logo" href="./index.html">
                <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 class="sr-only">Argent Bank</h1>
            </NavLink>

            <div>
                <NavLink class="main-nav-item" href="./sign-in.html">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>

        </nav>
    );
};

export default Header;