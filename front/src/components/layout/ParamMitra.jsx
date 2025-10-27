import React, { useState, useEffect } from "react";
import {
  User,
  LogOut,
  Home,
  Mic,
  Globe,
  Zap,
  MessageSquare,
} from "lucide-react";

export default function ParamMitra() {
  const [waveAnimation, setWaveAnimation] = useState(0);
  const [activePage, setActivePage] = useState("welcome");

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const src =
      "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#0A0F1C] via-[#0E1628] to-[#0A0F1C] text-white">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-[#101726] to-[#141C2C] p-8 flex flex-col shadow-2xl">
        <div className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            VOXCONNECT
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#6DB8C7] to-[#3A8DAB] rounded-full"></div>
        </div>

        <nav className="flex-1 space-y-3">
          <button
            onClick={() => setActivePage("welcome")}
            className={`flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 ${
              activePage === "welcome"
                ? "bg-[#1A2438] text-white shadow-lg"
                : "hover:bg-[#202C46] text-gray-300 hover:text-white"
            }`}
          >
            <Home size={22} strokeWidth={2} />
            <span className="font-medium">Welcome</span>
          </button>

          <button
            onClick={() => setActivePage("profile")}
            className={`flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 ${
              activePage === "profile"
                ? "bg-[#1A2438] text-white shadow-lg"
                : "hover:bg-[#202C46] text-gray-300 hover:text-white"
            }`}
          >
            <User size={22} strokeWidth={2} />
            <span className="font-medium">Profile</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <LogOut size={22} strokeWidth={2} />
            <span className="font-medium">Logout</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="text-white/50 text-sm">Version 1.0.0</p>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-6">
        {activePage === "welcome" ? (
          <>
            {/* Background animation */}
            <div className="absolute inset-0">
              <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#1A2438]/40 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#6DB8C7]/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              ></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-8 text-center">
              <h1 className="text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Multilingual</span>{" "}
                <span className="text-[#6DB8C7]">AI Bot</span>
              </h1>
              <p className="text-gray-400 text-lg mb-6">
                Your intelligent voice assistant for seamless communication
              </p>
              
              {/* AI Circle + Widget (you can move freely) */}
             <div className="relative flex items-center justify-center w-[320px] h-[320px] mb-16 z-10">
  <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A3E]/50 to-[#0A0F1C]/30 rounded-full blur-2xl"></div>

  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
    <path
      d={`M 200 200 m -${
        160 + Math.sin(waveAnimation * 0.05) * 12
      } 0 a ${160 + Math.sin(waveAnimation * 0.05) * 12} ${
        160 + Math.sin(waveAnimation * 0.05) * 12
      } 0 1 0 ${
        2 * (160 + Math.sin(waveAnimation * 0.05) * 12)
      } 0 a ${160 + Math.sin(waveAnimation * 0.05) * 12} ${
        160 + Math.sin(waveAnimation * 0.05) * 12
      } 0 1 0 -${
        2 * (160 + Math.sin(waveAnimation * 0.05) * 12)
      } 0`}
      fill="none"
      stroke="url(#gradient1)"
      strokeWidth="3"
      opacity="0.6"
    />
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3A8DAB" />
        <stop offset="100%" stopColor="#6DB8C7" />
      </linearGradient>
    </defs>
  </svg>

  {/* Widget - freely movable */}
  <div
    className="absolute z-50"
    style={{
      transform: "translate(80px, 60px)", // move it here
    }}
  >
    <vapi-widget
      public-key="38fb0f5f-5a6c-4469-8afa-8eb5b987d738"
      assistant-id="ec2f45ca-a09b-47a5-a9c1-fb89a4171af6"
      mode="voice"
      title="START"
      theme="dark"
      base-bg-color="#101726"
      accent-color="#6DB8C7"
      cta-button-color="#3A8DAB"
      cta-button-text-color="#FFFFFF"
      border-radius="large"
      size="compact"
      start-button-text="Start"
      end-button-text="End"
      voice-show-transcript="false"
    ></vapi-widget>
  </div>
</div>


              {/* Feature Section (fully restored) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#131B2E] rounded-2xl p-6 w-56 text-center hover:bg-[#1A2438] transition-all duration-300">
                  <Globe className="w-8 h-8 mx-auto mb-3 text-[#6DB8C7]" />
                  <h4 className="text-lg font-semibold mb-2">Multilingual</h4>
                  <p className="text-gray-400 text-sm">
                    Supports over 50 languages
                  </p>
                </div>
                <div className="bg-[#131B2E] rounded-2xl p-6 w-56 text-center hover:bg-[#1A2438] transition-all duration-300">
                  <MessageSquare className="w-8 h-8 mx-auto mb-3 text-[#6DB8C7]" />
                  <h4 className="text-lg font-semibold mb-2">Personalities</h4>
                  <p className="text-gray-400 text-sm">Multiple switching</p>
                </div>
                <div className="bg-[#131B2E] rounded-2xl p-6 w-56 text-center hover:bg-[#1A2438] transition-all duration-300">
                  <Mic className="w-8 h-8 mx-auto mb-3 text-[#6DB8C7]" />
                  <h4 className="text-lg font-semibold mb-2">Voice Assistant</h4>
                  <p className="text-gray-400 text-sm">
                    Real-time voice interaction
                  </p>
                </div>
                <div className="bg-[#131B2E] rounded-2xl p-6 w-56 text-center hover:bg-[#1A2438] transition-all duration-300">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-[#6DB8C7]" />
                  <h4 className="text-lg font-semibold mb-2">Contextual AI</h4>
                  <p className="text-gray-400 text-sm">
                    Context-aware responses
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Profile Page (unchanged)
          <div className="bg-[#111a2e] p-10 rounded-2xl shadow-2xl w-[650px] border border-[#3A8DAB]/30 z-10">
            <h2 className="text-3xl font-semibold mb-4 text-[#6DB8C7]">
              User Information
            </h2>
            <p className="text-gray-400 mb-6">
              Please fill in your details to personalize your VoxConnect
              experience.
            </p>

            <form className="grid grid-cols-2 gap-4">
              <input
                placeholder="Full Name"
                className="bg-[#1A2438] p-3 rounded-lg col-span-1"
              />
              <input
                placeholder="Email"
                className="bg-[#1A2438] p-3 rounded-lg col-span-1"
              />
              <input
                placeholder="Mobile Number"
                className="bg-[#1A2438] p-3 rounded-lg col-span-1"
              />
              <input
                placeholder="Age"
                className="bg-[#1A2438] p-3 rounded-lg col-span-1"
              />
              <input
                placeholder="Country"
                className="bg-[#1A2438] p-3 rounded-lg col-span-1"
              />
              <input
                placeholder="City"
                className="bg-[#1A2438] p-3 rounded-lg col-span-1"
              />

              <select className="bg-[#1A2438] p-3 rounded-lg col-span-1">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
              <select className="bg-[#1A2438] p-3 rounded-lg col-span-1">
                <option>None</option>
                <option>French</option>
                <option>German</option>
              </select>

              <select className="bg-[#1A2438] p-3 rounded-lg col-span-2">
                <option>Learning</option>
                <option>Personal</option>
                <option>Work</option>
              </select>

              <div className="col-span-2 flex gap-4 items-center mt-2">
                <label className="text-gray-300">
                  Enable voice interaction?
                </label>
                <div className="flex gap-4">
                  <label>
                    <input type="radio" name="voice" defaultChecked /> Yes
                  </label>
                  <label>
                    <input type="radio" name="voice" /> No
                  </label>
                </div>
              </div>

              <div className="col-span-2 flex justify-center gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#3A8DAB] to-[#6DB8C7] px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
