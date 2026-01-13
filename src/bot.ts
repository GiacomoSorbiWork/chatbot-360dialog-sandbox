import { sendMessage } from './whatsappClient'

export async function handleMessage(payload: any) {
  const message = payload?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]
  if (!message) {
    return
  }

  const text = message.text?.body?.toLowerCase() || ''
  const to = message.from

  let reply = "Sorry, I didn't understand that. Type 'help'."

  if (text.includes('help')) {
    reply = 'Available commands: help, hours, pricing'
  }
  if (text.includes('hours')) {
    reply = 'We are open Mon–Fri, 9am–5pm.'
  }
  if (text.includes('pricing')) {
    reply = 'Pricing starts at £49/month.'
  }
  await sendMessage(to, reply)
}
