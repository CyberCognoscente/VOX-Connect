import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import VoxLeftPanel from "./VoxLeftPanel";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
          onSubmit={handleLogin}
          className="vox-glass vox-stagger relative z-10 w-full max-w-md space-y-6 rounded-3xl p-8 md:p-10" style={{ animationDelay: "120ms" }}
        >
          <div>
            <p className="mb-2 text-sm text-[#b8cae0]">Welcome back</p>
            <h2 className="text-4xl font-bold text-white">Login</h2>
          </div>

          <div className="space-y-4">
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
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-[#3A8DAB] to-[#6DB8C7] py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(58,141,171,0.9)] transition hover:brightness-110"
          >
            Enter Workspace
          </button>

          <div className="flex items-center justify-center gap-2 text-sm text-[#94aac1]">
            <span className="h-px w-16 bg-[#7088a8]/40"></span>
            <span>or continue with</span>
            <span className="h-px w-16 bg-[#7088a8]/40"></span>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="rounded-full border border-[#8aa8c8]/40 bg-[#0f1b30]/80 p-3 transition hover:border-[#9ad7e5]/90 hover:bg-[#142746]"
              title="Login with Google"
            >
              <FaGoogle size={18} className="text-[#DB4437]" />
            </button>
            <button
              type="button"
              className="rounded-full border border-[#8aa8c8]/40 bg-[#0f1b30]/80 p-3 transition hover:border-[#9ad7e5]/90 hover:bg-[#142746]"
              title="Login with LinkedIn"
            >
              <FaLinkedin size={18} className="text-[#0077B5]" />
            </button>
            <button
              type="button"
              className="rounded-full border border-[#8aa8c8]/40 bg-[#0f1b30]/80 p-3 transition hover:border-[#9ad7e5]/90 hover:bg-[#142746]"
              title="Login with GitHub"
            >
              <FaGithub size={18} className="text-white" />
            </button>
          </div>

          <p className="text-center text-sm text-[#b7c8dc]">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-semibold text-[#8ed9ea] hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
