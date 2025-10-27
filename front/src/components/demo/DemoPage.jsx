import React from "react";
import { useNavigate } from "react-router-dom";
import { Globe, MessageSquare, Mic, Zap } from "lucide-react";

const DemoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#0a0a2e] via-[#0f163b] to-[#0a0a2e] flex flex-col items-center justify-between text-white relative overflow-hidden">
      
      {/* 🔹 Navbar */}
      <nav className="w-full flex justify-between items-center px-12 py-6 bg-transparent fixed top-0 left-0 z-20">
        <h1 className="text-3xl font-extrabold text-white tracking-wide">
          VOX<span className="text-[#6fe0ff]">CONNECT</span>
        </h1>

        <div className="flex gap-6">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 border border-[#6fe0ff] rounded-full text-[#6fe0ff] font-medium hover:bg-[#6fe0ff] hover:text-[#0a0a2e] transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 border border-[#6fe0ff] rounded-full text-[#6fe0ff] font-medium hover:bg-[#6fe0ff] hover:text-[#0a0a2e] transition duration-300"
          >
            Signup
          </button>
        </div>
      </nav>

      {/* 🔹 Title Section */}
      <div className="mt-32 text-center">
        <h1 className="text-6xl font-extrabold">
          Multilingual <span className="text-[#6fe0ff]">AI Bot</span>
        </h1>
        <p className="text-gray-300 mt-3 text-xl">
          Your intelligent voice assistant for seamless communication
        </p>
        
      </div>

      {/* 🔹 Central Animated Circle */}
      <div className="relative flex justify-center items-center mt-16">
        <div className="w-64 h-64 rounded-full border-2 border-[#6fe0ff] animate-pulse opacity-60"></div>
        <div className="absolute w-52 h-52 rounded-full border border-[#4cc9f0] animate-ping"></div>
      </div>

      {/* 🔹 Features Section */}
      <div className="w-full flex justify-center items-center mb-16">
        <div className="grid grid-cols-4 gap-8 max-w-6xl">
          {/* Feature 1 */}
          <div className="bg-[#111a3a] p-6 rounded-xl shadow-lg text-center hover:bg-[#1a2450] transition duration-300">
            <Globe className="mx-auto mb-4 text-[#6fe0ff]" size={36} />
            <h3 className="text-2xl font-semibold mb-2">Multilingual</h3>
            <p className="text-gray-400 text-sm">Supports over 50 languages</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#111a3a] p-6 rounded-xl shadow-lg text-center hover:bg-[#1a2450] transition duration-300">
            <MessageSquare className="mx-auto mb-4 text-[#6fe0ff]" size={36} />
            <h3 className="text-2xl font-semibold mb-2">Personalities</h3>
            <p className="text-gray-400 text-sm">Multiple switching</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#111a3a] p-6 rounded-xl shadow-lg text-center hover:bg-[#1a2450] transition duration-300">
            <Mic className="mx-auto mb-4 text-[#6fe0ff]" size={36} />
            <h3 className="text-2xl font-semibold mb-2">Voice Assistant</h3>
            <p className="text-gray-400 text-sm">
              Real-time voice interaction
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#111a3a] p-6 rounded-xl shadow-lg text-center hover:bg-[#1a2450] transition duration-300">
            <Zap className="mx-auto mb-4 text-[#6fe0ff]" size={36} />
            <h3 className="text-2xl font-semibold mb-2">Contextual AI</h3>
            <p className="text-gray-400 text-sm">
              Context-aware responses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
