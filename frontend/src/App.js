import "./App.css";
import Navbbar from "./Components/Navbar/Navbbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/fleurs"
            element={<ShopCategory banner={men_banner} category="men" />}
          >
            <Route
              path="fleurs-sechées"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="stabilisées"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="artificielles"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
          </Route>
          <Route
            path="/decoration"
            element={<ShopCategory banner={women_banner} category="women" />}
          >
            <Route
              path="vase"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="objects"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="tableaux"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="moules"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
          </Route>
          <Route
            path="/services"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          >
            <Route
              path="abonnement"
              element={<ShopCategory banner={kids_banner} category="kid" />}
            />
            <Route
              path="personnalisation"
              element={<ShopCategory banner={kids_banner} category="kid" />}
            />
          </Route>
          <Route
            path="/collections/all"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
