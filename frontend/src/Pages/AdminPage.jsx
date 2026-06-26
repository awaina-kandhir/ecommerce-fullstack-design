import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

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
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);

      // Remove deleted product from the table
      setProducts(products.filter((product) => product._id !== id));
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
};
const handleAddProduct = async (e) => {
  e.preventDefault();

  try {
    const url = editingId
      ? `http://localhost:5000/api/products/${editingId}`
      : "http://localhost:5000/api/products";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    if (res.ok) {
      alert(editingId ? "Product updated!" : "Product added!");

      const updatedProducts = await fetch("http://localhost:5000/api/products");
      const allProducts = await updatedProducts.json();

      setProducts(allProducts);

      setEditingId(null);

      setNewProduct({
        name: "",
        price: "",
        image: "",
        description: "",
        category: "",
        stock: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>
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

  <button
    className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
  >
    Add Product
  </button>

</form>
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

            {products.map((product) => (

              <tr key={product._id}>

                <td className="border p-3">{product.name}</td>

                <td className="border p-3">
                  Rs. {product.price.toLocaleString()}
                </td>

                <td className="border p-3">
                  {product.category}
                </td>

                <td className="border p-3">
                  {product.stock}
                </td>

                <td className="border p-3">

                  <button
               onClick={() => { setEditingId(product._id);
                      setNewProduct(product);
                         }}
                 className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                   >
                   Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                     >
                    Delete
                </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
        </div>

      </div>
    </>
  );
}

export default AdminPage;