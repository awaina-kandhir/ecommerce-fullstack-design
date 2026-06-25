import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          ShopEase
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          <Link to="/shop" className="hover:text-blue-500">
            Products
          </Link>

          <Link to="/cart" className="hover:text-blue-500">
            Cart
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;