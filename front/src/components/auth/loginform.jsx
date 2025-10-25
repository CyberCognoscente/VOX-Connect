import { useNavigate } from "react-router-dom";
import VoxLeftPanel from "./VoxLeftPanel";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/param-mitra");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <VoxLeftPanel />

      {/* Right Side */}
      <div className="w-[40%] flex items-center justify-center bg-[#12121e] ">
        <form
          onSubmit={handleLogin}
          className="w-80 space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          <h2 className="text-3xl font-semibold text-center text-white bg-clip-text ">
            Sign In
          </h2>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-purple-400/40 bg-white/10 text-white placeholder-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-purple-400/40 bg-white/10 text-white placeholder-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-300">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-400 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
