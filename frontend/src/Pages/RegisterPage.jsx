import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();

  // Get existing users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const existingUser = users.find(
    (user) => user.email === formData.email
  );

  if (existingUser) {
    alert("Email already registered!");
    return;
  }

  // Save new user
  users.push(formData);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful!");
  navigate("/login");
};

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Register
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-3 w-full mb-4 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded"
          onChange={handleChange}
          required
        />

        <button
          className="bg-black text-white w-full py-3 rounded"
        >
          Register
        </button>

      </form>

      <p className="mt-5 text-center">
        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>
      </p>

    </div>
  );
}

export default RegisterPage;