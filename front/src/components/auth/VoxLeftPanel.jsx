import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe2, Mic2, MessageSquareText, Sparkles } from "lucide-react";
import botImage from "../../assets/bot.jpeg";

const VoxLeftPanel = () => {
  const navigate = useNavigate();
  const [activeLanguage, setActiveLanguage] = useState(0);
  const languages = ["Marathi", "Hindi", "English"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative hidden lg:flex lg:w-[58%] h-screen overflow-hidden vox-grid-bg">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#3A8DAB]/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#6DB8C7]/20 blur-3xl"></div>

      <div className="relative z-10 flex w-full flex-col justify-between p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide text-white">VOXCONNECT</h1>
          <button
            onClick={() => navigate("/demo")}
            className="rounded-full border border-[#86C7D5]/40 bg-[#112035]/70 px-5 py-2 text-sm font-semibold text-[#c8e8f0] transition hover:border-[#86C7D5]/80 hover:bg-[#183154]"
          >
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#86C7D5]/35 bg-[#112035]/70 px-4 py-1 text-sm text-[#d5eefa]">
              <Sparkles size={16} />
              AI Voice Platform
            </p>
            <h2 className="text-6xl font-bold leading-[1.02] text-white">
              The most human-like multilingual voice bot.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[#c6d8eb]">
              Speak naturally, switch context instantly, and route users to
              purpose-built AI personalities.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-[#6DB8C7]/25 blur-3xl"></div>
            <img
              src={botImage}
              alt="Voice assistant"
              className="vox-float relative h-72 w-72 rounded-[2rem] border border-[#9ad7e5]/35 object-cover shadow-[0_20px_60px_-10px_rgba(48,138,169,0.55)]"
            />
          </div>
        </div>

        <div className="vox-glass rounded-3xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Capabilities</h3>
            <p className="rounded-full bg-[#0f1c33] px-3 py-1 text-sm text-[#b5dbe6]">
              Language: {languages[activeLanguage]}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-[#d8e8f8]">
            <div className="rounded-xl bg-[#0e1a2f]/70 p-4">
              <Globe2 className="mb-2 text-[#6DB8C7]" />
              Multi-language understanding
            </div>
            <div className="rounded-xl bg-[#0e1a2f]/70 p-4">
              <Mic2 className="mb-2 text-[#6DB8C7]" />
              Real-time voice turn-taking
            </div>
            <div className="rounded-xl bg-[#0e1a2f]/70 p-4">
              <MessageSquareText className="mb-2 text-[#6DB8C7]" />
              Context-aware responses
            </div>
            <div className="rounded-xl bg-[#0e1a2f]/70 p-4">
              <Sparkles className="mb-2 text-[#6DB8C7]" />
              Personality-based assistants
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoxLeftPanel;
