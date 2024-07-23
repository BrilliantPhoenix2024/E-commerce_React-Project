import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="main-container">
      {/* Main container for flexbox */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<Product />} />
        {/* Adjusted to handle productId directly */}
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
