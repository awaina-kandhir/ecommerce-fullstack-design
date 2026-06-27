import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import productsData from "../data/products";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const product = productsData.find(
    (item) => item.id === Number(id)
  );

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

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

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
              ⭐⭐⭐⭐⭐
            </p>

            <p className="text-green-600 text-3xl font-bold mt-4">
              Rs. {product.price.toLocaleString()}
            </p>

            <p className="text-gray-600 mt-6 leading-7">
              {product.description}
            </p>

            <p className="mt-4 text-lg">
              <strong>Category:</strong> {product.category}
            </p>

            <p className="mt-2 text-lg">
              <strong>Stock:</strong> {product.stock}
            </p>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-3 rounded-lg mt-8 hover:bg-gray-800"
            >
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