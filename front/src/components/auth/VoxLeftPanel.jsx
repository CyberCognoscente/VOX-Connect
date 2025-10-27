import React, { useState, useEffect } from "react";
import botImage from "../../assets/bot.jpeg"; 
import { useNavigate } from "react-router-dom";

const VoxLeftPanel = () => {

  const navigate = useNavigate();
  const [activeLanguage, setActiveLanguage] = useState(0);
  const languages = ["मराठी", "हिंदी", "English"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-[#07031e] flex flex-col items-center justify-between p-8 text-center relative overflow-hidden">
      

      
      {/* Header */}
      <div className="w-full flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white bg-clip-text">
            VOXCONNECT
          </h1>
        </div>
      </div>

      {/* Center Bot Illustration */}
      <div className="relative mt-10 z-10 flex flex-col items-center">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-8xl font-bold text-white bg-clip-text">
            Multilingual AI Bot
          </h2>
          <img 
            src={botImage} 
            alt="Multilingual Bot"
            className="w-64 h-64 ml-8 bg-[#100b2f] rounded-full shadow-lg"
          />
        </div>
      </div>

       {/* Start Demo Button */}
       <button
      onClick={() => navigate("/demo")}
      className="px-8 py-3 text-2xl font-semibold text-[#07031e] bg-white rounded-full shadow-md hover:bg-[#00bcd4] hover:text-white transition duration-300"
    >
      Start Demo
    </button>

      {/* Features Section */}
      <div className="relative z-10 mb-8 mt-8 flex flex-col items-center">
        <h3 className="text-5xl font-semibold text-white mb-6">Features</h3>
        <div className="grid grid-cols-2 gap-y-4 gap-x-12 mb-8">
          <div className="text-2xl text-white text-left">🌐 Multilingual</div>
          <div className="text-2xl text-white text-left">🎙️ Voice Assistant</div>
          <div className="text-2xl text-white text-left">💬 Concurrent Chat</div>
          <div className="text-2xl text-white text-left">🤖 Smart AI</div>
        </div>

       
      </div>
      
    </div>
  );
};

export default VoxLeftPanel;
