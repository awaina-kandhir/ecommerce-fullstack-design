import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import productsData from "../data/products";

function AdminPage() {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    stock: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Load products
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));

    if (savedProducts && savedProducts.length > 0) {
      setProducts(savedProducts);
    } else {
      setProducts(productsData);
      localStorage.setItem("products", JSON.stringify(productsData));
    }
  }, []);

  // Save products whenever they change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add or Update Product
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (editingId) {
      const updatedProducts = products.map((product) =>
        product.id === editingId
          ? {
              ...newProduct,
              id: editingId,
              price: Number(newProduct.price),
              stock: Number(newProduct.stock),
            }
          : product
      );

      setProducts(updatedProducts);

      alert("Product updated successfully!");
    } else {
      const product = {
        id: Date.now(),
        ...newProduct,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      };

      setProducts([...products, product]);

      alert("Product added successfully!");
    }

    setEditingId(null);

    setNewProduct({
      name: "",
      price: "",
      image: "",
      description: "",
      category: "",
      stock: "",
    });
  };

  // Delete Product
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);

    alert("Product deleted successfully!");
  };

    // Edit Product
  const handleEdit = (product) => {
    setEditingId(product.id);

    setNewProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      stock: product.stock,
    });
  };

  // Cancel Edit
  const handleCancel = () => {
    setEditingId(null);

    setNewProduct({
      name: "",
      price: "",
      image: "",
      description: "",
      category: "",
      stock: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        {/* Product Form */}
        <form onSubmit={handleAddProduct} className="mb-8">
          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newProduct.category}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

          </div>

          <div className="mt-4 flex gap-3">

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              {editingId ? "Update Product" : "Add Product"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}

          </div>
        </form>

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">

            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Stock</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {products.length > 0 ? (

                products.map((product) => (
                  <tr key={product.id}>

                    <td className="border p-3">
                      {product.name}
                    </td>

                    <td className="border p-3">
                      Rs. {Number(product.price).toLocaleString()}
                    </td>

                    <td className="border p-3">
                      {product.category}
                    </td>

                    <td className="border p-3">
                      {product.stock}
                    </td>

                    <td className="border p-3">

                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))

              ) : (

                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-4 text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>
        </div>

      </div>
    </>
  );
}

export default AdminPage;