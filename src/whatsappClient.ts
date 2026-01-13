import axios from 'axios'

const API_URL = 'https://waba-sandbox.360dialog.io/v1/messages'
const API_KEY = process.env.D360_API_KEY as string

export async function sendMessage(to: string, text: string) {
  try {
    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text }
    }

    await axios.post(API_URL, payload, {
      headers: {
        'D360-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('[whatsappClient] Error sending message', JSON.stringify({ to, error: error instanceof Error ? error.message : String(error) }, null, 2))
    throw error
  }
}
  } catch (error) {
    console.error('[whatsappClient] Error sending message', JSON.stringify({ to, error: error instanceof Error ? error.message : String(error) }, null, 2))
    throw error
  }
}
