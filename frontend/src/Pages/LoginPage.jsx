import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
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

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === formData.email &&
      u.password === formData.password
  );

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  // Save logged-in user
  localStorage.setItem("user", JSON.stringify(user));

  // Update AuthContext
  login(user);

  alert("Login Successful!");
  navigate("/");
};

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Login
      </h1>

      <form onSubmit={handleSubmit}>
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

        <button className="bg-black text-white w-full py-3 rounded">
          Login
        </button>
      </form>

      <p className="mt-5 text-center">
        Don't have an account?
        <Link to="/register" className="text-blue-600 ml-2">
          Register
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;