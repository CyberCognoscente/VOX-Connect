import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/loginform";
import SignupForm from "./components/auth/signupform";
import ParamMitra from "./components/layout/ParamMitra";
import DemoPage from "./components/demo/DemoPage";
import GeneralBotPage from "./components/layout/GeneralBotPage";
import FriendBotPage from "./components/layout/FriendBotPage";
import EducatorBotPage from "./components/layout/EducatorBotPage";
import ProfessionalBotPage from "./components/layout/ProfessionalBotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route path="/param-mitra" element={<ParamMitra />} />
        <Route path="/param-mitra/general-bot" element={<GeneralBotPage />} />
        <Route path="/param-mitra/friend-bot" element={<FriendBotPage />} />
        <Route path="/param-mitra/educator-bot" element={<EducatorBotPage />} />
        <Route
          path="/param-mitra/professional-bot"
          element={<ProfessionalBotPage />}
        />

        <Route path="/demo" element={<DemoPage />} /> 

        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-3xl font-semibold text-gray-400">
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
