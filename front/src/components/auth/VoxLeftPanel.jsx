import React, { useState, useEffect } from "react";

const VoxLeftPanel = () => {
  const [activeLanguage, setActiveLanguage] = useState(0);
  const languages = ["मराठी", "हिंदी", "English"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[60%] h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-between p-8 text-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">V</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
            VOXCONNECT
          </h1>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-6 relative z-10">
        <div className="relative">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight mb-2">
            Multilingual <br /> AI Bot
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
        </div>
        
        <p className="text-gray-200 mt-6 max-w-xs text-sm leading-relaxed">
          Your intelligent voice assistant for seamless communication across languages
        </p>

        {/* Enhanced Bot Illustration Section */}
        <div className="relative mt-12 mb-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-300/40 to-purple-300/40 rounded-full blur-2xl scale-110"></div>
          
          {/* Bot SVG Illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-40 h-40 mx-auto relative z-10 drop-shadow-lg"
          >
            {/* Bot Body with gradient */}
            <defs>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f0f0ff" />
              </linearGradient>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f5f3ff" />
              </linearGradient>
            </defs>
            
            {/* Body */}
            <circle cx="100" cy="120" r="40" fill="url(#bodyGradient)" stroke="#e0e7ff" strokeWidth="2" />
            
            {/* Head */}
            <circle cx="100" cy="70" r="35" fill="url(#headGradient)" stroke="#e0e7ff" strokeWidth="2" />
            
            {/* Face Background */}
            <rect
              x="70"
              y="50"
              width="60"
              height="40"
              rx="20"
              ry="20"
              fill="#312e81"
            />
            
            {/* Eyes */}
            <circle cx="85" cy="70" r="6" fill="#6ee7b7">
              <animate attributeName="r" values="6;5;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="115" cy="70" r="6" fill="#6ee7b7">
              <animate attributeName="r" values="6;5;6" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Smile */}
            <path
              d="M85 80 Q100 90 115 80"
              stroke="#6ee7b7"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Headset */}
            <circle
              cx="100"
              cy="70"
              r="37"
              stroke="#4c1d95"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="65" cy="70" r="10" fill="#4c1d95" />
            <circle cx="135" cy="70" r="10" fill="#4c1d95" />
            
            {/* Microphone */}
            <path
              d="M135 80 Q140 100 120 105"
              stroke="#4c1d95"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Sound waves */}
            <path d="M145 70 Q150 70 150 70" stroke="#a78bfa" strokeWidth="2" fill="none">
              <animate attributeName="d" values="M145 70 Q150 70 150 70;M145 70 Q150 65 150 70;M145 70 Q150 70 150 70" dur="1.5s" repeatCount="indefinite" />
            </path>
          </svg>

          {/* Floating Speech Bubbles with animations */}
          <div 
            className={`absolute top-4 -left-15 bg-white rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold transition-all duration-500 ${
              activeLanguage === 0 ? 'text-indigo-700 scale-110 shadow-indigo-200' : 'text-gray-500 scale-100'
            }`}
          >
            मराठी
          </div>
          <div 
            className={`absolute -top-6 left-11 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold transition-all duration-500 ${
              activeLanguage === 1 ? 'text-teal-700 scale-110 shadow-teal-200' : 'text-gray-500 scale-100'
            }`}
          >
            हिंदी
          </div>
          <div 
            className={`absolute top-4 -right-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold transition-all duration-500 ${
              activeLanguage === 2 ? 'text-indigo-700 scale-110 shadow-indigo-200' : 'text-gray-500 scale-100'
            }`}
          >
            English
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="mt-4 mb-2 w-full relative z-10">
        <h3 className="text-xl font-bold text-indigo-200 mb-4 flex items-center justify-center gap-2">
          <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-indigo-400"></span>
          Features
          <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-indigo-400"></span>
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Feature 1 */}
          <div className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left border border-cyan-400/40 hover:border-cyan-300/60 hover:-translate-y-1">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🌐</div>
            <h4 className="font-bold text-cyan-100 text-sm mb-1">Multilingual</h4>
            <p className="text-xs text-cyan-200/90 leading-relaxed">Supports multiple languages seamlessly</p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-gradient-to-br from-violet-500/20 to-fuchsia-600/20 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left border border-violet-400/40 hover:border-violet-300/60 hover:-translate-y-1">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💬</div>
            <h4 className="font-bold text-violet-100 text-sm mb-1">Concurrent Chat</h4>
            <p className="text-xs text-violet-200/90 leading-relaxed">Easy switch between languages</p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-gradient-to-br from-rose-500/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left border border-rose-400/40 hover:border-rose-300/60 hover:-translate-y-1">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🎙️</div>
            <h4 className="font-bold text-rose-100 text-sm mb-1">Voice Assistant</h4>
            <p className="text-xs text-rose-200/90 leading-relaxed">Real-time voice interaction</p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-md rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left border border-emerald-400/40 hover:border-emerald-300/60 hover:-translate-y-1">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h4 className="font-bold text-emerald-100 text-sm mb-1">Smart AI</h4>
            <p className="text-xs text-emerald-200/90 leading-relaxed">Context-aware responses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoxLeftPanel;