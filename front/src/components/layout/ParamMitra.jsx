import React, { useState, useEffect } from "react";
import { User, LogOut, Home, Mic, Globe, Zap, MessageSquare } from "lucide-react";

export default function ParamMitra() {
  const [waveAnimation, setWaveAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const suggestedPrompts = [
    "Tell me about your day",
    "What's the weather like?",
    "Help me brainstorm ideas",
    "Translate this for me"
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-purple-900 to-purple-800 p-8 flex flex-col shadow-2xl">
        <div className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">VOXCONNECT</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
        </div>
        
        <nav className="flex-1 space-y-3">
          <button className="flex w-full items-center gap-4 px-5 py-4 rounded-xl bg-purple-700/60 hover:bg-purple-700 text-white transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
            <Home size={22} strokeWidth={2} /> 
            <span className="font-medium">Welcome</span>
          </button>
          <button className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-purple-700 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1">
            <User size={22} strokeWidth={2} /> 
            <span className="font-medium">Account</span>
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-purple-700 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <LogOut size={22} strokeWidth={2} /> 
            <span className="font-medium">Logout</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="text-white/50 text-sm">Version 1.0.0</p>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-gradient-to-tl from-pink-400/30 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "4s" }}
          ></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-black via-black-100 to-black bg-clip-text text-transparent">
                VOX
              </h1>
              <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            </div>
            <p className="text-2xl text-black font-medium tracking-wide">
              Your compassionate AI companion
            </p>
            <p className="text-base text-black mt-3 max-w-md mx-auto">
              Experience natural, intelligent conversations with advanced voice technology
            </p>
          </div>

          <div className="flex items-start justify-center gap-12 w-full">
            {/* Left floating cards */}
            <div className="flex flex-col gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 w-56">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                    <Globe size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Multilingual</h3>
                </div>
                <p className="text-sm text-black">Speak in your preferred language seamlessly</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 w-56">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Instant Response</h3>
                </div>
                <p className="text-sm text-black">Get real-time answers to your questions</p>
              </div>
            </div>

            {/* Center - Voice visualization circle with widget */}
            <div className="relative flex items-center justify-center w-[320px] h-[320px] flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-2xl"></div>
              
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Outer ring */}
                <path
                  d={`M 200 200 m -${160 + Math.sin(waveAnimation * 0.05) * 12} 0 a ${
                    160 + Math.sin(waveAnimation * 0.05) * 12
                  } ${160 + Math.sin(waveAnimation * 0.05) * 12} 0 1 0 ${
                    2 * (160 + Math.sin(waveAnimation * 0.05) * 12)
                  } 0 a ${160 + Math.sin(waveAnimation * 0.05) * 12} ${
                    160 + Math.sin(waveAnimation * 0.05) * 12
                  } 0 1 0 -${2 * (160 + Math.sin(waveAnimation * 0.05) * 12)} 0`}
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  opacity="0.6"
                />
                
                {/* Middle ring */}
                <path
                  d={`M 200 200 m -${120 + Math.sin(waveAnimation * 0.07 + 1) * 10} 0 a ${
                    120 + Math.sin(waveAnimation * 0.07 + 1) * 10
                  } ${120 + Math.sin(waveAnimation * 0.07 + 1) * 10} 0 1 0 ${
                    2 * (120 + Math.sin(waveAnimation * 0.07 + 1) * 10)
                  } 0 a ${120 + Math.sin(waveAnimation * 0.07 + 1) * 10} ${
                    120 + Math.sin(waveAnimation * 0.07 + 1) * 10
                  } 0 1 0 -${2 * (120 + Math.sin(waveAnimation * 0.07 + 1) * 10)} 0`}
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="2.5"
                  opacity="0.5"
                />
                
                {/* Inner ring */}
                <path
                  d={`M 200 200 m -${85 + Math.sin(waveAnimation * 0.09 + 2) * 8} 0 a ${
                    85 + Math.sin(waveAnimation * 0.09 + 2) * 8
                  } ${85 + Math.sin(waveAnimation * 0.09 + 2) * 8} 0 1 0 ${
                    2 * (85 + Math.sin(waveAnimation * 0.09 + 2) * 8)
                  } 0 a ${85 + Math.sin(waveAnimation * 0.09 + 2) * 8} ${
                    85 + Math.sin(waveAnimation * 0.09 + 2) * 8
                  } 0 1 0 -${2 * (85 + Math.sin(waveAnimation * 0.09 + 2) * 8)} 0`}
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  opacity="0.4"
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#f9a8d4" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f9a8d4" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Widget in center */}
              <div className="absolute top-[65%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                 <vapi-widget
                  public-key="38fb0f5f-5a6c-4469-8afa-8eb5b987d738"
                  assistant-id="ec2f45ca-a09b-47a5-a9c1-fb89a4171af6"
                  mode="voice"
                  title="Click Here"
                  theme="dark"
                  base-bg-color="#1e1b4b"
                  accent-color="#008900"
                  cta-button-color="#7c3aed"
                  cta-button-text-color="#000000"
                  border-radius="large" 
                  size="compact"
                  start-button-text="Start"
                  end-button-text="End"
                  voice-show-transcript="false"
                ></vapi-widget>
              </div>
            </div>

            {/* Right floating cards */}
            <div className="flex flex-col gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 w-56">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <Mic size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Voice Powered</h3>
                </div>
                <p className="text-sm text-black">Natural voice interactions that understand context</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 w-56">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Smart Context</h3>
                </div>
                <p className="text-sm text-black">Remembers conversation flow for better assistance</p>
              </div>
            </div>
          </div>

          {/* Suggested prompts section */}
          <div className="mt-12 w-full max-w-4xl">
            <p className="text-center text-black text-sm mb-4 font-medium">Try asking me:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 text-sm text-black transition-all duration-300 hover:scale-105"
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>

          {/* Feature indicators */}
          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm  font-medium">Live AI Response</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              <span className="text-sm font-medium">Natural Voice</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
              <span className="text-sm font-medium">Real-time Transcript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}