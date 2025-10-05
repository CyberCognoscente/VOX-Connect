import React, { useEffect } from "react";

const VoxGini = () => {
  useEffect(() => {
    // ensure the Vapi script is loaded only once
    if (!document.getElementById("vapi-script")) {
      const script = document.createElement("script");
      script.id = "vapi-script";
      script.src =
        "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    // handle tool calls from Vapi
    const handleToolCall = (event) => {
      const { name, parameters } = event.detail;
      console.log("Tool call received:", name, parameters);

      if (name === "open_website" && parameters?.url) {
        // actually open the website in a new tab
        window.open(parameters.url, "_blank");
      }
    };

    window.addEventListener("vapi-tool-call", handleToolCall);

    return () => {
      window.removeEventListener("vapi-tool-call", handleToolCall);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">
      <h1 className="text-3xl font-bold mb-8">VOX:Gini</h1>

      {/* Container for glow + widget */}
      <div
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

        {/* Vapi Widget */}
        <vapi-widget
          assistant-id="b8299bd8-7589-4557-a81d-aad045c6cf0e"
          public-key="a0d655f2-0614-4092-a061-ba0e926084b7"
          mode="voice"
          theme="dark"
          start-open="false"
        ></vapi-widget>
      </div>
    </div>
  );
};

export default VoxGini;


// import React, { useEffect } from "react";

// const VoxGini = () => {
//   useEffect(() => {
//     const scriptId = "vapi-script";
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.src =
//         "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
//       script.async = true;
//       script.type = "text/javascript";
//       document.body.appendChild(script);

//       script.onload = () => {
//         console.log("✅ Vapi script loaded");

//         // Ensure vapi is available
//         if (window.vapi) {
//           // Listen for tool calls
//           window.vapi.on("tool-call", (toolCall) => {
//             console.log("🔧 Tool call received:", toolCall);

//             if (toolCall?.name === "open_website" && toolCall?.parameters?.url) {
//               let url = toolCall.parameters.url;
//               if (!/^https?:\/\//i.test(url)) {
//                 url = "https://" + url;
//               }
//               console.log("🌐 Opening website:", url);
//               window.open(url, "_blank");
//             }
//           });
//         } else {
//           console.error("❌ Vapi not found on window");
//         }
//       };
//     }
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-8">VOX: Gini</h1>

//       <vapi-widget
//         assistant-id="b8299bd8-7589-4557-a81d-aad045c6cf0e"
//         public-key="a0d655f2-0614-4092-a061-ba0e926084b7"
//         mode="voice"
//         theme="dark"
//         start-open="false"
//       ></vapi-widget>
//     </div>
//   );
// };

// export default VoxGini;


