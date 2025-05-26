// import React, { useContext } from "react";
// import "./ProductDisplay.css";
// import star_icon from "../../assets/star_icon.png";
// import star_dull_icon from "../../assets/star_dull_icon.png";
// import { ShopContext } from "../../Context/ShopContext";
// const ProductDisplay = (props) => {
//   const { product } = props;
//   const { addTocart } = useContext(ShopContext);
//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           <img src={product.image} alt="" height="200px" />
//           <img src={product.image} alt="" height="200px" />
//           <img src={product.image} alt="" height="200px" />
//           <img src={product.image} alt="" height="200px" />
//         </div>
//         <div className="productdisplay-img">
//           <img className="productdisplay-main-img" src={product.image} alt="" />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-star">
//           <img src={star_icon} alt="" height="20px" />
//           <img src={star_icon} alt="" height="20px" />
//           <img src={star_icon} alt="" height="20px" />
//           <img src={star_icon} alt="" height="20px" />
//           <img src={star_dull_icon} alt="" height="20px" />
//           <p>(130)</p>
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-prices-old">
//             ${product.price}
//           </div>
//           <div className="productdisplay-right-prices-new">
//             ${product.discountedPrice}
//           </div>
//         </div>
//         <div className="productdisplay-right-description">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas
//           quae! Officiis alias dignissimos omnis, distinctio molestiae, aliquid
//           quisquam ipsum, repudiandae assumenda aut unde vel laboriosam nulla
//           fuga est vitae!
//         </div>
//         <button
//           onClick={() => {
//             addTocart(product.id);
//           }}
//         >
//           Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
