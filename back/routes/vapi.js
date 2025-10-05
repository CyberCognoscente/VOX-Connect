const express = require('express');
const router = express.Router();
const { VapiClient } = require('@vapi-ai/server-sdk');

// // Initialize Vapi Client with the secret key from .env
// const vapi = new VapiClient({
//     token: process.env.VAPI_API_KEY,
// });

// // --- Public Webhook Endpoint (Vapi sends call events here) ---
// /**
//  * * @route POST /webhook
//  * @desc Endpoint Vapi hits to send call events (e.g., call-start, transcript, function-call)
//  * @access Public (Must be exposed via Ngrok/Public URL)
//  */
// router.post('/webhook', async (req, res) => {
//     const { message } = req.body;

//     // Log the event for debugging
//     console.log(`[VAPI Webhook] Received Event: ${message.type}`);

//     try {
//         switch (message.type) {
//             case 'call-start':
//                 console.log(`Call Started: ID ${message.call.id}`);
//                 // Respond with 'continue' to keep the call alive
//                 return res.json({ status: 'continue' });

//             case 'end-of-call':
//                 console.log(`Call Ended: ID ${message.call.id}`);
//                 // Log final data or save transcription
//                 return res.json({ status: 'continue' });

//             case 'transcript':
//                 // Log real-time transcriptions
//                 console.log(`[Transcript] ${message.transcript}`);
//                 return res.json({ status: 'continue' });
            
//             // Handle tool/function calls if you had them defined in your assistant
//             case 'function-call':
//                 // Your logic to perform a database lookup or external API call goes here
//                 console.log(`Function Call: ${message.functionCall.name} with params: ${JSON.stringify(message.functionCall.parameters)}`);
//                 // Example response for function calls (must return a 'result' object)
//                 return res.json({
//                     result: {
//                         name: message.functionCall.name,
//                         status: "Success",
//                         data: "Function execution placeholder."
//                     }
//                 });

//             default:
//                 // For all other messages, simply acknowledge and continue
//                 return res.json({ status: 'continue' });
//         }
//     } catch (error) {
//         console.error("Error processing Vapi Webhook:", error);
//         // Always send a 200/continue response back to Vapi even on error to prevent unnecessary retries.
//         return res.json({ status: 'continue' });
//     }
// });

// // --- Call Initiation Endpoint ---
// /**
//  * * @route POST /start-web-call
//  * @desc Endpoint to initiate an outbound web call from your Express server.
//  * @access Public (or Protected if desired)
//  */
// router.post('/start-web-call', async (req, res) => {
//     const ASSISTANT_ID = '5da48f61-5b44-44aa-912f-642fed4df09b'; 

//     if (ASSISTANT_ID === 'YOUR_ASSISTANT_ID') {
//         return res.status(500).json({ error: "Please replace 'YOUR_ASSISTANT_ID' with your actual Assistant ID." });
//     }

//     try {
//         const call = await vapi.calls.create({
//             assistantId: ASSISTANT_ID,
//             type: "web",
//         });

//         console.log(`Vapi Call Created: ID ${call.id}`);

//         res.status(200).json({
//             message: 'Call initiated successfully.',
//             callId: call.id,
//             webCallUrl: call.webCallUrl,
//         });
//     } catch (error) {
//         console.error("Error initiating Vapi call:", error.message);
//         res.status(500).json({ error: 'Failed to initiate Vapi call.', details: error.message });
//     }
// });



// --- Provide Assistant ID to frontend ---
router.get('/get-assistant', (req, res) => {
    res.json({ 
        assistantId: '5da48f61-5b44-44aa-912f-642fed4df09b' // your actual Assistant ID
    });
});
 module.exports = router;




