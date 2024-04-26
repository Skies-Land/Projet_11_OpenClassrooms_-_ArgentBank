// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HomePage />
      <Footer />
    </BrowserRouter>
  );
};

export default App;