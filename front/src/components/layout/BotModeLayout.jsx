import React, { useEffect, useState } from "react";
import { User, LogOut, Home, Bell, Download, PlusCircle } from "lucide-react";
import { vapiPublicKey } from "../../data/botConfigs";

export default function BotModeLayout({
  title,
  description,
  assistantId,
  assistantName,
  firstMessage,
}) {
  const [waveAnimation, setWaveAnimation] = useState(0);

  const goWithRefresh = (path) => {
    window.location.href = path;
  };

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation((prev) => (prev + 1) % 360);
    }, 35);
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
    <div className="vox-page-enter flex min-h-screen md:h-screen bg-gradient-to-b from-[#0A0F1C] via-[#0E1628] to-[#0A0F1C] text-white">
      
      {/* Sidebar */}
      <div className="w-24 md:w-72 bg-gradient-to-b from-[#101726] to-[#141C2C] p-4 md:p-8 flex flex-col shadow-2xl border-r border-[#6DB8C7]/15">
        <div className="mb-8 md:mb-16">
          <h1 className="hidden md:block text-3xl font-bold tracking-tight text-white mb-2">
            VOXCONNECT
          </h1>
          <div className="mx-auto md:mx-0 h-1 w-10 md:w-20 bg-gradient-to-r from-[#6DB8C7] to-[#3A8DAB] rounded-full"></div>
        </div>

        <nav className="flex-1 space-y-3">
          <button
            onClick={() => goWithRefresh("/param-mitra")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#202C46] text-gray-300 hover:text-white"
          >
            <Home size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Welcome</span>
          </button>

          <button
            onClick={refreshPage}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#202C46] text-gray-300 hover:text-white"
          >
            <User size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Profile</span>
          </button>

          <button
            onClick={refreshPage}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <PlusCircle size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Fresh Chat</span>
          </button>

          <button
            onClick={refreshPage}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <Bell size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Notifications</span>
          </button>

          <button
            onClick={refreshPage}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <Download size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Export Chats</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <LogOut size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Logout</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="hidden md:block text-white/50 text-sm">Version 1.0.0</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex bg-[#12121e] items-center justify-center relative overflow-hidden px-4 md:px-6">
        
        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-2 md:px-8 text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {title}
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-8">
            {description}
          </p>

          <div className="bg-[#131B2E] rounded-2xl p-5 md:p-8 w-full max-w-3xl text-center border border-[#3A8DAB]/30">
            
            {/* Animated Rings */}
            <div className="relative flex items-center justify-center w-[260px] h-[260px] md:w-[320px] md:h-[320px] mx-auto mb-6">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1E2A3E]/60 to-[#0A0F1C]/40 blur-2xl"></div>

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r={145 + Math.sin(waveAnimation * 0.05) * 10}
                  fill="none"
                  stroke="#3A8DAB"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <circle
                  cx="200"
                  cy="200"
                  r={120 + Math.sin((waveAnimation + 120) * 0.05) * 8}
                  fill="none"
                  stroke="#6DB8C7"
                  strokeWidth="2.5"
                  opacity="0.6"
                />
              </svg>

              

              <div
                className="absolute z-20"
                style={{ transform: "translate(80px, 60px)" }}
              >
                <vapi-widget
                  assistant-id={assistantId}
                  public-key={vapiPublicKey}
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

            <p className="text-gray-300 mb-2">
              Voice mode ready for{" "}
              <span className="text-[#6DB8C7]">
                {assistantName || title}
              </span>
            </p>

            {firstMessage ? (
              <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto">
                {firstMessage}
              </p>
            ) : (
              <p className="text-sm text-gray-400 mb-6">
                Listening pulse and response rings are active.
              </p>
            )}

            <button
              onClick={() => goWithRefresh("/param-mitra")}
              className="bg-gradient-to-r from-[#3A8DAB] to-[#6DB8C7] px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90"
            >
              Back to Bot Selection
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

