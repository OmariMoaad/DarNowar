import React from "react";
import { useState } from "react";
import { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>Dar Nowar</p>
        </div>
      </Link>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: menu === "shop" ? "green" : "",
            }}
            to="/"
          >
            Shop
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("fleurs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/fleurs">
            <nav>
              <ul>
                <li
                  onClick={() => {
                    setMenu("fleurs");
                  }}
                  style={{
                    color: menu === "men" ? "green" : "",
                    textDecoration: menu === "men" ? "none" : "",
                  }}
                >
                  <div
                    style={{
                      color: menu === "men" ? "green" : "",
                      textDecoration: menu === "men" ? "none" : "",
                    }}
                  >
                    <div>Fleurs Sechés </div>
                    <div>
                      <span>&</span> Stabilisé <span> </span>
                      <img src={dropdown_icon} alt="" />
                    </div>
                  </div>

                  <div className="dropdown">
                    <Link to="/fleurs/fleurs-sechées">Fleurs Sechées</Link>
                    <Link to="/fleurs/stabilisées">Stabilisées</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: menu === "women" ? "green" : "",
            }}
            to="/women"
          >
            women
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: menu === "kids" ? "green" : "",
            }}
            to="/kids"
          >
            kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon"></img>
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
