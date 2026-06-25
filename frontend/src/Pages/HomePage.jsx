import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
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

          {/* Product 1 */}
          <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
              alt="Headphones"
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="font-bold text-lg mt-4">
              Wireless Headphones
            </h3>

            <p className="text-yellow-500 mt-2">
              ⭐ 4.5 (328 Reviews)
            </p>

            <p className="text-green-600 font-bold text-xl mt-2">
              Rs. 24,999
            </p>

            <Link to="/product/4">
              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                View Product
              </button>
            </Link>
          </div>

          {/* Product 2 */}
          <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
              alt="Smart Watch"
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="font-bold text-lg mt-4">
              Smart Watch
            </h3>

            <p className="text-yellow-500 mt-2">
              ⭐ 4.8 (512 Reviews)
            </p>

            <p className="text-green-600 font-bold text-xl mt-2">
              Rs. 18,999
            </p>

            <Link to="/product/5">
              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                View Product
              </button>
            </Link>
          </div>

          {/* Product 3 */}
          <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
              alt="Nike Air Max"
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="font-bold text-lg mt-4">
              Nike Air Max
            </h3>

            <p className="text-yellow-500 mt-2">
              ⭐ 4.7 (245 Reviews)
            </p>

            <p className="text-green-600 font-bold text-xl mt-2">
              Rs. 12,999
            </p>

            <Link to="/product/1">
              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                View Product
              </button>
            </Link>
          </div>

          {/* Product 4 */}
          <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
              alt="iPhone 15 Pro"
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="font-bold text-lg mt-4">
              iPhone 15 Pro
            </h3>

            <p className="text-yellow-500 mt-2">
              ⭐ 4.9 (890 Reviews)
            </p>

            <p className="text-green-600 font-bold text-xl mt-2">
              Rs. 349,999
            </p>

            <Link to="/product/2">
              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                View Product
              </button>
            </Link>
          </div>

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