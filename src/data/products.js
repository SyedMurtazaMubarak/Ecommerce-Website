import item1 from "../assets/item1.jpg"; // Adjust the image paths as necessary
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg"; // Add more images as necessary

// Define the product data array
export const allProducts = [
  {
    id: 1,
    title: "Mid Rise Skinny Jeans",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    image: item1,
    secondImage: item2,
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    category: "Hand Made Items",
    price: 249,
    discountedPrice: 149,
    image: item3,
    secondImage: item4,
  },
  {
    id: 3,
    title: "Bootcut Jeans",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    image: item1,
    secondImage: item2,
  },
  // Add more products as needed
];
