import { useNavigate } from "react-router-dom";
import VoxLeftPanel from "./VoxLeftPanel";

function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
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
          onSubmit={handleSignup}
          className="w-80 space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          <h2 className="text-3xl font-semibold text-center text-white bg-clip-text ">
            Sign Up
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-purple-400/40 bg-white/10 text-white placeholder-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />

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
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <a href="/" className="text-400 font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
