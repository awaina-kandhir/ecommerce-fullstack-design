import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import shoes from "../assets/shoes.jpg";
import iphone from "../assets/iphone.jpg";
import laptop from "../assets/laptop.jpg";
import headphones from "../assets/headphones.jpg";
import watch from "../assets/watch.jpg";
import speaker from "../assets/speaker.jpg";
import camera from "../assets/camera.jpg";
import keyboard from "../assets/keyboard.jpg";

function ProductDetailsPage() {
  const { id } = useParams();

  const products = {
    1: {
      name: "Nike Air Max",
      price: "12,999",
      image: shoes,
      description:
        "Premium quality Nike Air Max shoes designed for comfort and durability.",
    },

    2: {
      name: "iPhone 15 Pro",
      price: "349,999",
      image: iphone,
      description:
        "Latest Apple iPhone with powerful performance and advanced camera system.",
    },

    3: {
      name: "Gaming Laptop",
      price: "289,999",
      image: laptop,
      description:
        "High-performance gaming laptop suitable for gaming and professional work.",
    },

    4: {
      name: "Wireless Headphones",
      price: "24,999",
      image: headphones,
      description:
        "Noise-cancelling wireless headphones with crystal clear sound quality.",
    },

    5: {
      name: "Smart Watch",
      price: "18,999",
      image: watch,
      description:
        "Smart watch with fitness tracking, notifications and health monitoring.",
    },

    6: {
      name: "Bluetooth Speaker",
      price: "9,999",
      image: speaker,
      description:
        "Portable Bluetooth speaker with powerful bass and long battery life.",
    },

    7: {
      name: "DSLR Camera",
      price: "119,999",
      image: camera,
      description:
        "Professional DSLR camera for photography and video recording.",
    },

    8: {
      name: "Mechanical Keyboard",
      price: "14,999",
      image: keyboard,
      description:
        "Mechanical keyboard with RGB lighting and premium switches.",
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="text-center py-20">
          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              {product.name}
            </h1>

            <p className="text-yellow-500 text-lg mt-3">
              ⭐⭐⭐⭐⭐ (245 Reviews)
            </p>

            <p className="text-green-600 text-3xl font-bold mt-4">
              Rs. {product.price}
            </p>

            <p className="text-gray-600 mt-6 leading-7">
              {product.description}
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-lg mt-8 hover:bg-gray-800">
              Add To Cart
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetailsPage;