import { useNavigate } from "react-router-dom";
import VoxLeftPanel from "./VoxLeftPanel";

function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/param-mitra");
  };

  return (
    <div className="flex h-screen">
      {/* Left: Vox Panel */}
      <VoxLeftPanel />

      {/* Right: Form */}
      <div 
        className="w-2/5 flex items-center justify-center shadow-lg" 
        style={{ background: 'linear-gradient(135deg, #e8d5f2 0%, #d4c5e8 50%, #c8b8e0 100%)' }}
      >
        <form onSubmit={handleSignup} className="w-80 space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
          
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full border border-purple-200 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/90" 
          />
          
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full border border-purple-200 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/90" 
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border border-purple-200 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/90" 
          />
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </button>
          
          <p className="text-center text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/" className="text-purple-600 font-semibold">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;