import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import Dashboard from "./components/layout/Dashboard";
import ParamMitra from "./components/layout/ParamMitra";
import VoxGini from "./components/layout/VoxGini";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bot/param-mitra" element={<ParamMitra />} />
        <Route path="/bot/gini" element={<VoxGini />} />
        <Route
          path="/bot/:id"
          element={
            <h1 className="text-center mt-20 text-3xl font-semibold">
              Bot Page Coming Soon 🚀
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
