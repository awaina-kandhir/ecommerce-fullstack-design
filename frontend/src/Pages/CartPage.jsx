import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white shadow-md rounded-xl p-10 text-center">

            <div className="text-7xl mb-4">🛒</div>

            <h2 className="text-2xl font-bold mb-3">
              Your Cart is Empty
            </h2>

            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products yet.
            </p>

            <Link to="/shop">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Continue Shopping
              </button>
            </Link>

          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
               key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 mb-4 shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div>
                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-green-600 font-bold">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-8">
              <h2 className="text-3xl font-bold">
                Total: Rs. {totalPrice.toLocaleString()}
              </h2>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CartPage;