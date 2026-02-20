import { Link, useNavigate } from "react-router-dom";
import VoxLeftPanel from "./VoxLeftPanel";

function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/param-mitra");
  };

  return (
    <div className="vox-page-enter min-h-screen lg:flex">
      <VoxLeftPanel />

      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0B1324] px-5 lg:w-[42%]">
        <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-[#3A8DAB]/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#6DB8C7]/15 blur-3xl"></div>

        <form
          onSubmit={handleSignup}
          className="vox-glass vox-stagger relative z-10 w-full max-w-md space-y-5 rounded-3xl p-8 md:p-10" style={{ animationDelay: "120ms" }}
        >
          <div>
            <p className="mb-2 text-sm text-[#b8cae0]">Create account</p>
            <h2 className="text-4xl font-bold text-white">Sign Up</h2>
          </div>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-[#86C7D5]/30 bg-[#0f1b30]/80 px-4 py-3 text-white placeholder:text-[#8ea7c3] outline-none transition focus:border-[#86C7D5] focus:ring-2 focus:ring-[#6DB8C7]/35"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-[#86C7D5]/30 bg-[#0f1b30]/80 px-4 py-3 text-white placeholder:text-[#8ea7c3] outline-none transition focus:border-[#86C7D5] focus:ring-2 focus:ring-[#6DB8C7]/35"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-[#86C7D5]/30 bg-[#0f1b30]/80 px-4 py-3 text-white placeholder:text-[#8ea7c3] outline-none transition focus:border-[#86C7D5] focus:ring-2 focus:ring-[#6DB8C7]/35"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-[#3A8DAB] to-[#6DB8C7] py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(58,141,171,0.9)] transition hover:brightness-110"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-[#b7c8dc]">
            Already have an account?{" "}
            <Link to="/" className="font-semibold text-[#8ed9ea] hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
