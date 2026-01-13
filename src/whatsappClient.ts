import axios from 'axios'

const API_URL = 'https://waba-sandbox.360dialog.io/v1/messages'
const API_KEY = process.env.D360_API_KEY as string

export async function sendMessage(to: string, text: string) {
  await axios.post(
    API_URL,
    {
      to,
      type: 'text',
      text: { body: text }
    },
    {
      headers: {
        'D360-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    }
  )
}
