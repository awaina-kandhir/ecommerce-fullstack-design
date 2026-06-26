import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          ShopEase
        </h1>

        <div className="flex items-center gap-6">

          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          <Link to="/shop" className="hover:text-blue-500">
            Products
          </Link>

          <Link to="/cart" className="hover:text-blue-500">
            Cart
          </Link>

          {user ? (
            <>
              <span className="font-semibold">
                Welcome, {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-500">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;