import Header from "./layout/header/Header.jsx";
import Footer from "./layout/footer/Footer.jsx";
import HomePage from "./pages/home-main/HomeMain.jsx";
import SignInPage from "./pages/sign-in/SignIn.jsx";
import User from "./pages/user/User.jsx";
import WithAuthentication from "./components/with-authentification/WithAuthentication.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/User" element={<WithAuthentication> <User /> </WithAuthentication>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;