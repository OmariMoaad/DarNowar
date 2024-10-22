import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";
import "./Navbbar.css";

const Navbbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = {
    Fleurs: {
      path: "/fleurs",
      name: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          Fleurs Sechés
          <div style={{ display: "flex", alignItems: "center" }}>
            <span> & Stabilisé </span>
            <img
              src={dropdown_icon}
              alt="dropdown icon"
              style={{ marginLeft: "5px" }}
            />
          </div>
        </div>
      ),
      subCategories: [
        { name: "Fleurs Sechées", path: "/fleurs/fleurs-sechées" },
        { name: "Stabilisées", path: "/fleurs/stabilisées" },
        { name: "Artificielles", path: "/fleurs/artificielles" },
      ],
    },
    Decoration: {
      path: "/decoration",
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          Objects de decoration
          <img
            src={dropdown_icon}
            alt="dropdown icon"
            style={{ marginLeft: "5px" }}
          />
        </div>
      ),
      subCategories: [
        { name: "Vase on potenie", path: "/decoration/vase" },
        { name: "Objects decoratifs", path: "/decoration/objects" },
        { name: "Tableaux", path: "/decoration/tableaux" },
        { name: "moules en silicone", path: "/decoration/moules" },
      ],
    },
    Services: {
      path: "/services",
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          Services
          <img
            src={dropdown_icon}
            alt="dropdown icon"
            style={{ marginLeft: "5px" }}
          />
        </div>
      ),
      subCategories: [
        { name: "Abonnement", path: "/services/abonnement" },
        { name: "Personnalisation", path: "/services/personnalisation" },
      ],
    },
  };

  return (
    <div className="navbar">
      <Link
        style={{ textDecoration: "none" }}
        to="/"
        onClick={() => setMenu(null)}
      >
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>Dar Nowar</p>
        </div>
      </Link>
      <ul className="nav-menu">
        {Object.entries(categories).map(([key, category]) => (
          <li
            key={key}
            onMouseEnter={() => setHoveredCategory(key)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <Link
              style={{
                textDecoration: "none",
                color: menu === key ? "green" : "",
              }}
              to={category.path}
              onClick={() => setMenu(key)}
            >
              {category.name}
            </Link>
            {hoveredCategory === key && (
              <div className="dropdown">
                {category.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    to={subCategory.path}
                    style={{ textDecoration: "none" }}
                    onClick={() => setMenu(key)}
                  >
                    {subCategory.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" onClick={() => setMenu(null)}>
          <button>Login</button>
        </Link>
        <Link to="/cart" onClick={() => setMenu(null)}>
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbbar;
