import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe2, MessageSquareText, Mic2, Sparkles } from "lucide-react";

const DemoPage = () => {
  const navigate = useNavigate();

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
    <div className="vox-page-enter relative min-h-screen overflow-hidden bg-[#070f1f] text-white">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#6DB8C7]/20 blur-3xl"></div>
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#3A8DAB]/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#274064]/25 blur-3xl"></div>

      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <h1 className="text-3xl font-bold tracking-wide">VOXCONNECT</h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="rounded-full border border-[#8fd4e1]/40 bg-[#112035]/70 px-5 py-2 text-sm font-medium text-[#d3edf5] transition hover:border-[#8fd4e1]/80 hover:bg-[#173055]"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="rounded-full border border-[#8fd4e1]/40 bg-[#112035]/70 px-5 py-2 text-sm font-medium text-[#d3edf5] transition hover:border-[#8fd4e1]/80 hover:bg-[#173055]"
          >
            Signup
          </button>
        </div>
      </nav>

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <section className="vox-stagger" style={{ animationDelay: "120ms" }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#83cad8]/35 bg-[#0f1c32]/65 px-4 py-1 text-sm text-[#cfe9f2]">
            <Sparkles size={16} />
            Live AI Voice Demo
          </p>
          <h2 className="text-5xl font-bold leading-tight md:text-6xl">
            Make conversations sound naturally intelligent.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-[#bfd3e9]">
            Test multilingual voice input, instant replies, and assistant
            personalities built for real use cases.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="vox-glass rounded-2xl p-4">
              <Globe2 className="mb-2 text-[#6DB8C7]" />
              <p className="text-sm text-[#d8e8f8]">Language switching</p>
            </div>
            <div className="vox-glass rounded-2xl p-4">
              <Mic2 className="mb-2 text-[#6DB8C7]" />
              <p className="text-sm text-[#d8e8f8]">Natural voice flow</p>
            </div>
            <div className="vox-glass rounded-2xl p-4">
              <MessageSquareText className="mb-2 text-[#6DB8C7]" />
              <p className="text-sm text-[#d8e8f8]">Context memory</p>
            </div>
            <div className="vox-glass rounded-2xl p-4">
              <Sparkles className="mb-2 text-[#6DB8C7]" />
              <p className="text-sm text-[#d8e8f8]">Adaptive persona</p>
            </div>
          </div>
        </section>

        <section
          className="vox-stagger vox-glass rounded-[2rem] p-6 md:p-8"
          style={{ animationDelay: "220ms" }}
        >
          <h3 className="mb-2 text-2xl font-semibold">Try Voice Assistant</h3>
          <p className="mb-6 text-[#bcd4e8]">
            Click start and begin speaking to the assistant.
          </p>

          <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center">
            <div className="absolute h-full w-full rounded-full border border-[#6DB8C7]/35"></div>
            <div className="absolute h-[80%] w-[80%] rounded-full border border-[#6DB8C7]/35 animate-pulse"></div>
            <div className="absolute h-[60%] w-[60%] rounded-full border border-[#6DB8C7]/45"></div>
            <div className="absolute z-20" style={{ transform: "translate(80px, 60px)" }}>
              <vapi-widget
                assistant-id="8f6f08f0-99fd-410f-a8e9-34b0e6c9866f"
                public-key="51857c0b-55d1-4f3d-8227-cd34d1b58f71"
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
        </section>
      </main>
    </div>
  );
};

export default DemoPage;
