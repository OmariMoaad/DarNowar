import React, { useContext, useState, useEffect } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(9);
      const filteredProducts = all_product.filter(
        (item) => item.category === props.category
      );

   const loadMore = (event) => {
    event.preventDefault(); 
     setVisibleCount((prevCount) => prevCount + 9); // Load 10 more products
   };
   useEffect(() => {
     setVisibleCount(9); // Reset to initial value
   }, [props.category]);
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div class="scrolling-text-container">
        <div class="scrolling-text">
          🌼 Discover our beautiful vases! 🌼 | 20% off on selected items! 🌼 |
          New arrivals just in! 🌼
        </div>
      </div>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showin 1-12 </span>
          out of 36 product
        </p>
        <div className="shopCategory-sort">
          Tri par défaut
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {filteredProducts.slice(0, visibleCount).map((item, i) => (
          <Item
            key={item.id} // Use item.id as a key for better performance
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <div className="shopCategory-loadMore">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
