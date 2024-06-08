import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./components/home-main/HomeMain.jsx";
import SignInPage from "./components/sign-in/SignIn.jsx";
import User from "./components/user/User.jsx";
import EditName from "./components/edit-name/EditName.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  const userProfil = useSelector(state =>state.login.userProfil)

  const redirectIfConnected = () => {
    if (userProfil) {
      return <Navigate to ='/User' />;
    }
    return null;
  };


  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} 
          />

          <Route 
            path="/SignInPage" 
            element={
              <>
                {redirectIfConnected()}
                <SignInPage />
              </>
            }
          />

          <Route 
            path="/User" 
            element={
              <PrivateRoutes>
                <User />
              </PrivateRoutes>
            } 
          />

          <Route 
            path="/EditName" 
            element={
              <PrivateRoutes>
                <EditName />
              </PrivateRoutes>
            }
          />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;