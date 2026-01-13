# 360dialog WhatsApp Sandbox Chatbot

## Setup
1. Install Node.js (18+)
2. Copy `.env.example` to `.env` and fill in your sandbox API key

## Run
```bash
npm install
npm run dev
```

## Webhook
Expose the server with ngrok:
```bash
ngrok http 3000
```

Register the webhook URL with 360dialog sandbox:
POST /v1/configs/webhook

## Test
Send messages like:
- help
- hours
- pricing
