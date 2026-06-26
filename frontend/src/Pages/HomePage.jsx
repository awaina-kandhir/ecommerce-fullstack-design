import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
}, []);
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Shop the latest trends in electronics and lifestyle.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/shop">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Shop Now
              </button>
            </Link>

            <Link to="/shop">
              <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white">
                Browse Categories
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">
          Featured Products
        </h2>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {products.slice(0, 4).map((product) => (
    <div
      key={product._id}
      className="border rounded-xl shadow-md p-4 hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg"
      />

      <h3 className="font-bold text-lg mt-4">
        {product.name}
      </h3>

      <p className="text-yellow-500 mt-2">
        ⭐⭐⭐⭐⭐
      </p>

      <p className="text-green-600 font-bold text-xl mt-2">
        Rs. {product.price.toLocaleString()}
      </p>

      <Link to={`/product/${product._id}`}>
        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          View Product
        </button>
      </Link>
    </div>
  ))}
</div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold">📱 Smartphones</h3>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold">💻 Laptops</h3>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold">🎧 Audio Devices</h3>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <h3 className="text-2xl font-bold">⌚ Smart Watches</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center p-6 shadow rounded-xl">
              <h3 className="text-2xl font-bold">🚚 Free Shipping</h3>
              <p className="mt-3 text-gray-600">
                Free delivery on selected products.
              </p>
            </div>

            <div className="text-center p-6 shadow rounded-xl">
              <h3 className="text-2xl font-bold">🔒 Secure Payment</h3>
              <p className="mt-3 text-gray-600">
                Safe and secure transactions.
              </p>
            </div>

            <div className="text-center p-6 shadow rounded-xl">
              <h3 className="text-2xl font-bold">↩ Easy Returns</h3>
              <p className="mt-3 text-gray-600">
                Hassle-free return policy.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;