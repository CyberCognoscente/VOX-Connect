import { useEffect, useRef } from "react";
import Header from "./Header";

function ParamMitra() {
  const widgetWrapper = useRef(null);

  useEffect(() => {
    // load Vapi script
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // create widget
    const widget = document.createElement("vapi-widget");
    widget.setAttribute("assistant-id", "5da48f61-5b44-44aa-912f-642fed4df09b");
    widget.setAttribute("public-key", "a0d655f2-0614-4092-a061-ba0e926084b7");
    widget.setAttribute("mode", "voice");
    widget.setAttribute("theme", "dark");
    widget.setAttribute("start-open", "false");

    if (widgetWrapper.current) {
      widgetWrapper.current.appendChild(widget);
    }

    return () => {
      widget.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Header />

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">
          Welcome to VOX: Param Mitra
        </h1>

        {/* Container for glow + widget */}
        <div
          ref={widgetWrapper}
          className="relative flex items-center justify-center"
          style={{
            position: "fixed",
            bottom: "100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "220px",
            height: "220px",
          }}
        >
          {/* Glow Ring */}
          <div
            className="absolute rounded-full blur-xl animate-spin-slow opacity-80"
            style={{
              width: "220px",
              height: "220px",
              background:
                "conic-gradient(from 0deg, #00f0ff, #7d00ff, #ff00e0, #00f0ff)",
            }}
          ></div>

          {/* force the widget to stay centered */}
          <style>{`
            vapi-widget {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              bottom: auto !important;
              right: auto !important;
              transform: none !important;
              z-index: 2 !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default ParamMitra;
