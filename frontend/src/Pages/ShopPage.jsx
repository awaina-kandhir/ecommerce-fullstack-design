import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import productsData from "../data/products";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));

    if (savedProducts && savedProducts.length > 0) {
      setProducts(savedProducts);
    } else {
      setProducts(productsData);
      localStorage.setItem("products", JSON.stringify(productsData));
    }
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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