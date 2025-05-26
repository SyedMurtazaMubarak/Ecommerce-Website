import React, { useContext, useState } from "react";
import "../CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return <div className="shop-category">ShopCategory</div>;
};

export default ShopCategory;
