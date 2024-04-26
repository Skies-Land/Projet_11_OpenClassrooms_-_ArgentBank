import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./components/home-main/HomeMain.jsx";
import SignInPage from "./components/sign-in/SignIn.jsx";
import User from "./components/user/User.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/User" element={<User />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;