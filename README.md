# WhatsApp Chatbot 360Dialog Sandbox

A WhatsApp chatbot built with Express.js and 360Dialog API for handling customer inquiries.

## Features

- WhatsApp message handling via webhook
- Automatic reply to common queries (help, hours, pricing)
- Error handling and logging
- Deployed on Vercel

## Deployment

**Live URL:** https://chatbot-360dialog-sandbox.vercel.app/webhook

## Setup

### Prerequisites

- Node.js 16+
- 360Dialog API key
- WhatsApp Business Account

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
D360_API_KEY=your_360dialog_api_key
PORT=3000
```

### Running Locally

```bash
npm run dev
```

The server will run on `http://localhost:3000`

## Project Structure

- `src/server.ts` - Express server and webhook endpoint
- `src/bot.ts` - Message handling and reply logic
- `src/whatsappClient.ts` - 360Dialog API client

## Webhook Endpoint

**POST** `/webhook`

Accepts WhatsApp webhook events from 360Dialog and processes incoming messages.

### Sample Request

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "735519599633452",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "messages": [
              {
                "from": "1234567890",
                "text": {
                  "body": "help"
                },
                "type": "text"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

## Supported Commands

- **help** - Display available commands
- **hours** - Business operating hours
- **pricing** - Pricing information

## Error Handling

Errors are logged with details for debugging. The webhook returns appropriate HTTP status codes:

- `200` - Message processed successfully
- `500` - Error during message processing

