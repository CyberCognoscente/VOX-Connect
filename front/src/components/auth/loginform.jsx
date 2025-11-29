import { useNavigate } from "react-router-dom";
import VoxLeftPanel from "./VoxLeftPanel";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

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
      <div className="w-[40%] flex items-center justify-center bg-[#12121e]">
        <form
          onSubmit={handleLogin}
          className="w-80 space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          <h2 className="text-3xl font-semibold text-center text-white bg-clip-text">
            Login
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
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="w-1/4 h-[1px] bg-gray-500/50"></span>
            <span>or continue with</span>
            <span className="w-1/4 h-[1px] bg-gray-500/50"></span>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-5">
            <button
              type="button"
              onClick={() => alert("Login with Google")}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-gray-500/40 transition"
              title="Login with Google"
            >
              <FaGoogle size={22} className="text-[#DB4437]" />
            </button>

            <button
              type="button"
              onClick={() => alert("Login with LinkedIn")}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-gray-500/40 transition"
              title="Login with LinkedIn"
            >
              <FaLinkedin size={22} className="text-[#0077B5]" />
            </button>

            <button
              type="button"
              onClick={() => alert("Login with GitHub")}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-gray-500/40 transition"
              title="Login with GitHub"
            >
              <FaGithub size={22} className="text-white" />
            </button>
          </div>

          <p className="text-center text-sm text-gray-300">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-400 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
