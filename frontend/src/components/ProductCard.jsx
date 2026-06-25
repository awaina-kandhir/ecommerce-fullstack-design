import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg"
        />

        <h2 className="text-xl font-bold mt-3">
          {product.name}
        </h2>

        <p className="text-yellow-500 mt-2">
          ⭐⭐⭐⭐⭐
        </p>

        <p className="text-green-600 font-bold text-2xl mt-2">
          Rs. {product.price}
        </p>

        <button className="w-full bg-black text-white py-3 rounded-lg mt-4">
          View Details
        </button>

      </div>
    </Link>
  );
}

export default ProductCard;