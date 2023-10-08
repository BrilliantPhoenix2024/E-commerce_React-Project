import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <div className="nav-logo">
          {" "}
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>{" "}
      </Link>

      <ul className="nav-menu">
        <li
          className="nav-menu"
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link to="/"> SHOP {menu === "shop" ? <hr /> : <></>} </Link>
        </li>

        <li
          className="nav-menu"
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens"> MEN {menu === "mens" ? <hr /> : <></>} </Link>
        </li>

        <li
          className="nav-menu"
          onClick={() => {
            setMenu("womens");
          }}
        >
          {" "}
          <Link to="/womens"> WOMEN {menu === "womens" ? <hr /> : <></>}</Link>
        </li>

        <li
          className="nav-menu"
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link to="/kids"> KIDS {menu === "kids" ? <hr /> : <></>} </Link>
        </li>
      </ul>

      <div className="nav-login-card">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
