import { sendMessage } from './whatsappClient'

export async function handleMessage(payload: any) {
  console.log('[bot] handleMessage called', { payloadKeys: Object.keys(payload) })
  
  const message = payload?.messages?.[0]
  if (!message) {
    console.log('[bot] No message found in payload')
    return
  }

  const text = message.text?.body?.toLowerCase() || ''
  const to = message.from

  console.log('[bot] Extracted message', { from: to, text, originalBody: message.text?.body })

  let reply = "Sorry, I didn't understand that. Type 'help'."

  if (text.includes('help')) {
    reply = 'Available commands: help, hours, pricing'
    console.log('[bot] Matched help command')
  }
  if (text.includes('hours')) {
    reply = 'We are open Mon–Fri, 9am–5pm.'
    console.log('[bot] Matched hours command')
  }
  if (text.includes('pricing')) {
    reply = 'Pricing starts at £49/month.'
    console.log('[bot] Matched pricing command')
  }

  console.log('[bot] Sending reply', { to, reply })
  await sendMessage(to, reply)
}
