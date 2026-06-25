import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import shoes from "../assets/shoes.jpg";
import iphone from "../assets/iphone.jpg";
import laptop from "../assets/laptop.jpg";
import headphones from "../assets/headphones.jpg";
import watch from "../assets/watch.jpg";
import speaker from "../assets/speaker.jpg";
import camera from "../assets/camera.jpg";
import keyboard from "../assets/keyboard.jpg";

function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "12,999",
      image: shoes,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "349,999",
      image: iphone,
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "289,999",
      image: laptop,
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "24,999",
      image: headphones,
    },
    {
      id: 5,
      name: "Smart Watch",
      price: "18,999",
      image: watch,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "9,999",
      image: speaker,
    },
    {
      id: 7,
      name: "DSLR Camera",
      price: "119,999",
      image: camera,
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      price: "14,999",
      image: keyboard,
    },
  ];

   return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-5xl font-bold mb-8">
          Our Products
        </h1>

        <input
          type="text"
          placeholder="Search Products..."
          className="border p-3 rounded-lg w-full mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default ShopPage;