import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext); // Get the context

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
      </Link>

      <ul className="nav-menu">
        <li className="nav-menu" onClick={() => setMenu("shop")}>
          <Link to="/">SHOP {menu === "shop" ? <hr /> : null}</Link>
        </li>
        <li className="nav-menu" onClick={() => setMenu("mens")}>
          <Link to="/mens">MEN {menu === "mens" ? <hr /> : null}</Link>
        </li>
        <li className="nav-menu" onClick={() => setMenu("womens")}>
          <Link to="/womens">WOMEN {menu === "womens" ? <hr /> : null}</Link>
        </li>
        <li className="nav-menu" onClick={() => setMenu("kids")}>
          <Link to="/kids">KIDS {menu === "kids" ? <hr /> : null}</Link>
        </li>
      </ul>

      <div className="nav-login-card">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
