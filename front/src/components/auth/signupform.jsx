import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* Left (60%) */}
      <div className="w-3/5 bg-gradient-to-b from-blue-600 to-green-500 flex flex-col justify-center items-center text-white p-12">
        <h1 className="text-4xl font-bold mb-4">VOX CONNECT</h1>
        <p className="text-xl mb-10">The Intelligence to Elevate</p>

        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6">
            Precision every command
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6">
            Think it. Speak. Solve it.
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6">
            Make your move effortlessly
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6">
            Unlock your next level
          </div>
        </div>
      </div>

      {/* Right (40%) */}
      <div className="w-2/5 flex items-center justify-center bg-white shadow-lg">
        <form onSubmit={handleSignup} className="w-80 space-y-6">
          <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400" />
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition">
            Sign Up
          </button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="text-purple-600 font-semibold">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
