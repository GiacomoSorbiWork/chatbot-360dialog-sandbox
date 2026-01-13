import axios from 'axios'

const API_URL = 'https://waba-sandbox.360dialog.io/v1/messages'
const API_KEY = process.env.D360_API_KEY as string

export async function sendMessage(to: string, text: string) {
  console.log('[whatsappClient] sendMessage called', JSON.stringify({ to, textLength: text.length }, null, 2))

  try {
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text }
    }
    console.log('[whatsappClient] Sending request to API', JSON.stringify({ url: API_URL, payload }, null, 2))

    const response = await axios.post(API_URL, payload, {
      headers: {
        'D360-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })

    console.log('[whatsappClient] Message sent successfully', JSON.stringify({ to, status: response.status, responseData: response.data }, null, 2))
  } catch (error) {
    console.error('[whatsappClient] Error sending message', JSON.stringify({ to, error: error instanceof Error ? error.message : String(error) }, null, 2))
    throw error
  }
}
