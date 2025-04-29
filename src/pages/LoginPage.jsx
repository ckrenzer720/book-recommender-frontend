import { useState } from "react";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); //eslint-disable-line

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await API.post("/auth/login", form);
  //     localStorage.setItem("token", res.data.token); // Save JWT
  //     alert("Login successful!");
  //     // Redirect or update state here
  //   } catch (err) {
  //     console.error(err);
  //     setError(err.response?.data?.message || "Login failed.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-parchment-texture bg-cover bg-center text-ink font-serif flex items-center justify-center">
      <div className="max-w-md w-full bg-white bg-opacity-90 p-6 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Log In</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <br />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
