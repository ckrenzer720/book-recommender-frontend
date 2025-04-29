import { useState } from "react";

function SignupPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(""); //eslint-disable-line

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await API.post("/auth/signup", form);
  //     alert("Signup successful! Please log in.");
  //   } catch (err) {
  //     console.error(err);
  //     setError(err.response?.data?.message || "Signup failed.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-parchment-texture bg-cover bg-center text-ink font-serif flex items-center justify-center">
      <div className="max-w-md w-full bg-white bg-opacity-90 p-6 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <br />
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
