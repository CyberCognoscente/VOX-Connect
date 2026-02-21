import React, { useState } from "react";
import {
  User,
  LogOut,
  Home,
  Bell,
  Download,
  PlusCircle,
  Bot,
  Heart,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { botConfigs } from "../../data/botConfigs";

export default function ParamMitra() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("welcome");

  const botCards = [
    {
      title: botConfigs.general.title,
      description: botConfigs.general.description,
      icon: Bot,
      path: "/param-mitra/general-bot",
    },
    {
      title: botConfigs.friend.title,
      description: botConfigs.friend.description,
      icon: Heart,
      path: "/param-mitra/friend-bot",
    },
    {
      title: botConfigs.educator.title,
      description: botConfigs.educator.description,
      icon: GraduationCap,
      path: "/param-mitra/educator-bot",
    },
    {
      title: botConfigs.professional.title,
      description: botConfigs.professional.description,
      icon: Briefcase,
      path: "/param-mitra/professional-bot",
    },
  ];

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
            onClick={() => setActivePage("welcome")}
            className={`flex w-full items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 ${
              activePage === "welcome"
                ? "bg-[#1A2438] text-white shadow-lg"
                : "hover:bg-[#202C46] text-gray-300 hover:text-white"
            }`}
          >
            <Home size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Welcome</span>
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
            <span className="hidden md:block font-medium">Profile</span>
          </button>

          <button
            onClick={() => alert("Starting a new chat...")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <PlusCircle size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Fresh Chat</span>
          </button>

          <button
            onClick={() => alert("Opening notifications...")}
            className="flex w-full items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#202C46] text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <Bell size={22} strokeWidth={2} />
            <span className="hidden md:block font-medium">Notifications</span>
          </button>

          <button
            onClick={() => alert("Exporting chat logs...")}
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

      <div className="flex-1 flex bg-[#12121e] items-center justify-center relative overflow-hidden px-6">
        {activePage === "welcome" ? (
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 md:px-8 text-center">
            <div className="absolute inset-x-0 top-24 mx-auto h-72 w-[65%] rounded-full bg-[#3A8DAB]/10 blur-3xl"></div>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4 relative">
              <span className="text-white">Choose Your</span>{" "}
              <span className="text-[#ffffff]">Bot</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl mb-10 relative max-w-2xl">
              Select one of the four bots to continue.
            </p>

            <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 w-full max-w-6xl">
              {botCards.map((bot, index) => {
                const Icon = bot.icon;
                return (
                  <button
                    key={bot.title}
                    type="button"
                    onClick={() => navigate(bot.path)}
                    style={{ animationDelay: `${120 + index * 90}ms` }}
                    className="vox-stagger group relative overflow-hidden rounded-3xl p-6 md:p-10 min-h-[200px] md:min-h-[220px] text-left border border-[#3A8DAB]/25 bg-gradient-to-br from-[#17233A] via-[#131B2E] to-[#0F1728] hover:border-[#6DB8C7]/70 hover:shadow-[0_24px_60px_-20px_rgba(58,141,171,0.5)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#6DB8C7]/10 blur-2xl group-hover:bg-[#6DB8C7]/20 transition-all"></div>

                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-[#0E1A2F] border border-[#6DB8C7]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-[#6DB8C7]" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight">
                        {bot.title}
                      </h4>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {bot.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
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
                placeholder="Gender"
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
                <option>Marathi</option>
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
