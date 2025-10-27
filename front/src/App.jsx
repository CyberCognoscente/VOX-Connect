import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import ParamMitra from "./components/layout/ParamMitra";
import DemoPage from "./components/demo/DemoPage"; // ✅ new import

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Auth Routes */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* 🔹 Main Bot Page */}
        <Route path="/param-mitra" element={<ParamMitra />} />

        {/* 🔹 Demo Page */}
        <Route path="/demo" element={<DemoPage />} /> {/* ✅ add this */}

        {/* 🔹 404 Fallback */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-3xl font-semibold text-gray-400">
              Page Not Found 😔
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
