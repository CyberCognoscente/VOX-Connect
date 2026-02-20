import React, { useEffect, useState } from "react";
import {
  User,
  LogOut,
  Home,
  Bell,
  Download,
  PlusCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BotModeLayout({ title, description, icon: Icon }) {
  const navigate = useNavigate();
  const [waveAnimation, setWaveAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation((prev) => (prev + 1) % 360);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vox-page-enter flex min-h-screen md:h-screen bg-gradient-to-b from-[#0A0F1C] via-[#0E1628] to-[#0A0F1C] text-white">
      <div className="w-24 md:w-72 bg-gradient-to-b from-[#101726] to-[#141C2C] p-4 md:p-8 flex flex-col shadow-2xl border-r border-[#6DB8C7]/15">
        <div className="mb-8 md:mb-16">
          <h1 className="hidden md:block text-3xl font-bold tracking-tight text-white mb-2">
            VOXCONNECT
          </h1>
          <div className="mx-auto md:mx-0 h-1 w-10 md:w-20 bg-gradient-to-r from-[#6DB8C7] to-[#3A8DAB] rounded-full"></div>
        </div>

        <nav className="flex-1 space-y-3">
          <button
            onClick={() => navigate("/param-mitra")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#202C46] text-gray-300 hover:text-white"
          >
            <Home size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Welcome</span>
          </button>

          <button
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#202C46] text-gray-300 hover:text-white"
          >
            <User size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Profile</span>
          </button>

          <button
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <PlusCircle size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Fresh Chat</span>
          </button>

          <button
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <Bell size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Notifications</span>
          </button>

          <button
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

      <div className="flex-1 flex bg-[#12121e] items-center justify-center relative overflow-hidden px-4 md:px-6">
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-2 md:px-8 text-center">
          <h1 className="vox-stagger text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ animationDelay: "80ms" }}>
            {title}
          </h1>
          <p className="vox-stagger text-gray-400 text-base md:text-lg mb-8" style={{ animationDelay: "160ms" }}>
            {description}
          </p>

          <div
            className="vox-stagger vox-soft-glow bg-[#131B2E] rounded-2xl p-5 md:p-8 w-full max-w-3xl text-center border border-[#3A8DAB]/30"
            style={{ animationDelay: "230ms" }}
          >
            <div className="relative flex items-center justify-center w-[260px] h-[260px] md:w-[320px] md:h-[320px] mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1E2A3E]/60 to-[#0A0F1C]/40 blur-2xl"></div>

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path
                  d={`M 200 200 m -${
                    145 + Math.sin(waveAnimation * 0.05) * 10
                  } 0 a ${145 + Math.sin(waveAnimation * 0.05) * 10} ${
                    145 + Math.sin(waveAnimation * 0.05) * 10
                  } 0 1 0 ${
                    2 * (145 + Math.sin(waveAnimation * 0.05) * 10)
                  } 0 a ${145 + Math.sin(waveAnimation * 0.05) * 10} ${
                    145 + Math.sin(waveAnimation * 0.05) * 10
                  } 0 1 0 -${
                    2 * (145 + Math.sin(waveAnimation * 0.05) * 10)
                  } 0`}
                  fill="none"
                  stroke="url(#ringGradientA)"
                  strokeWidth="3"
                  opacity="0.55"
                />
                <path
                  d={`M 200 200 m -${
                    120 + Math.sin((waveAnimation + 120) * 0.05) * 8
                  } 0 a ${120 + Math.sin((waveAnimation + 120) * 0.05) * 8} ${
                    120 + Math.sin((waveAnimation + 120) * 0.05) * 8
                  } 0 1 0 ${
                    2 * (120 + Math.sin((waveAnimation + 120) * 0.05) * 8)
                  } 0 a ${120 + Math.sin((waveAnimation + 120) * 0.05) * 8} ${
                    120 + Math.sin((waveAnimation + 120) * 0.05) * 8
                  } 0 1 0 -${
                    2 * (120 + Math.sin((waveAnimation + 120) * 0.05) * 8)
                  } 0`}
                  fill="none"
                  stroke="url(#ringGradientB)"
                  strokeWidth="2.5"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="ringGradientA" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3A8DAB" />
                    <stop offset="100%" stopColor="#6DB8C7" />
                  </linearGradient>
                  <linearGradient id="ringGradientB" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6DB8C7" />
                    <stop offset="100%" stopColor="#3A8DAB" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#1A2438] to-[#101726] border border-[#3A8DAB]/40 flex items-center justify-center shadow-xl">
                <Icon className="w-14 h-14 text-[#6DB8C7]" />
              </div>
            </div>

            <p className="text-gray-300 mb-2">
              Voice mode ready for <span className="text-[#6DB8C7]">{title}</span>
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Listening pulse and response rings are active.
            </p>

            <button
              onClick={() => navigate("/param-mitra")}
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
