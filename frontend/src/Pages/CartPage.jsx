import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function CartPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white shadow-md rounded-xl p-10 text-center">

          <div className="text-7xl mb-4">
            🛒
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Your Cart is Empty
          </h2>

          <p className="text-gray-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>

          <Link to="/shop">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Continue Shopping
            </button>
          </Link>

        </div>
<Footer />
      </div>
    </>
  );
}

export default CartPage;